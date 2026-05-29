'use client'

import { useRef, useEffect } from 'react'
import ShowcaseCard from './ShowcaseCard'
import { ShowcaseItem } from '@/data/showcase'

type Props = {
  items: ShowcaseItem[]
  direction: 'left' | 'right'
  baseSpeed?: number
}

export default function ShowcaseRow({
  items,
  direction,
  baseSpeed = 0.5,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const rafRef = useRef<number>(0)

  const speedRef = useRef(baseSpeed)
  const targetSpeedRef = useRef(baseSpeed)

  // only duplicate once
  const loopedItems = [...items, ...items]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const singleWidth = track.scrollWidth / 2

    posRef.current =
      direction === 'left'
        ? -singleWidth
        : 0

    const animate = () => {
      speedRef.current +=
        (targetSpeedRef.current -
          speedRef.current) *
        0.05

      const speed = speedRef.current

      posRef.current +=
        direction === 'right'
          ? speed
          : -speed

      const resetWidth =
        track.scrollWidth / 2

      if (
        direction === 'right' &&
        posRef.current >= 0
      ) {
        posRef.current =
          -resetWidth
      }

      if (
        direction === 'left' &&
        posRef.current <=
          -resetWidth
      ) {
        posRef.current = 0
      }

      track.style.transform =
        `translateX(${posRef.current}px)`

      rafRef.current =
        requestAnimationFrame(
          animate
        )
    }

    rafRef.current =
      requestAnimationFrame(
        animate
      )

    return () =>
      cancelAnimationFrame(
        rafRef.current
      )
  }, [direction, baseSpeed])

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        padding: '12px 0',
      }}
      onMouseEnter={() => {
        targetSpeedRef.current =
          baseSpeed * 0.25
      }}
      onMouseLeave={() => {
        targetSpeedRef.current =
          baseSpeed
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: '24px',
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {loopedItems.map(
          (item, i) => (
            <ShowcaseCard
              key={`${item.title}-${i}`}
              item={item}
              onHover={() => {}}
            />
          )
        )}
      </div>
    </div>
  )
}