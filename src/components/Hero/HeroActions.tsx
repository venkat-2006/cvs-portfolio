"use client";

import React from "react";
import Button from "../UI/Button";

export default function HeroActions() {
  return (
    <div
      className="
      flex
      flex-col
      sm:flex-row
      
      /* FIXED: Centers the buttons on mobile, left-aligns them on desktop */
      items-center
      lg:items-start
      
      /* FIXED: Ensures the container centers nicely within its parent box */
      justify-center
      lg:justify-start
      
      w-full
      gap-6
      "
    >
      <Button href="#showcase">
        View Work
      </Button>

      <Button href="#contact">
        Let&apos;s Talk
      </Button>
    </div>
  );
}