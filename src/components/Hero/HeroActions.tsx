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
      items-center
      lg:items-start
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