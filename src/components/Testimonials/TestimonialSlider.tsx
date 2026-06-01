"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import TestimonialControls from "./TestimonialControls";
import TestimonialDots from "./TestimonialDots";

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);

  const prevSlide = useCallback(() => {
    setDirection("left");
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setDirection("right");
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prevSlide, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  };

  const variants = {
    enter: {
      opacity: 0,
      y: 10,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <div
      className="relative w-full mx-auto max-w-[760px] px-4 sm:px-10 md:px-12 flex flex-col items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Depth Ghost Cards - Enhanced matching responsive configurations */}
      <div className="absolute inset-x-8 sm:inset-x-14 top-4 mx-auto w-[88%] rounded-[40px] border border-white/[0.03] bg-[#0c0c0e]/80 h-full pointer-events-none scale-[0.96] opacity-40 -z-10 shadow-2xl" />
      <div className="absolute inset-x-12 sm:inset-x-20 top-8 mx-auto w-[80%] rounded-[40px] border border-white/[0.01] bg-[#09090b]/90 h-full pointer-events-none scale-[0.92] opacity-20 -z-20" />
      
      {/* Card Interface Wrapper Box */}
      <div
        className="relative w-full mx-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full h-auto"
          >
            <TestimonialCard testimonial={testimonials[activeIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control Navigation Meta Bar */}
      <div className="flex items-center justify-between mt-10 w-full mx-auto px-1 sm:px-4">
        {/* Step Index Tracker Counter */}
        <p
          className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.35em] text-zinc-500 font-mono select-none"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {String(activeIndex + 1).padStart(2, "0")}{" "}
          <span className="text-zinc-700 mx-0.5 sm:mx-1">/</span>{" "}
          {String(testimonials.length).padStart(2, "0")}
        </p>
        
        {/* Interactive Dots Pagination Indicator */}
        <TestimonialDots
          total={testimonials.length}
          active={activeIndex}
          onDotClick={goToSlide}
        />
        
        {/* Slider Action Handlers */}
        <TestimonialControls onPrev={prevSlide} onNext={nextSlide} />
      </div>
    </div>
  );
}