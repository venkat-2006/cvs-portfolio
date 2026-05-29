"use client";

import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import Container from "../Layout/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
        fixed top-0 left-3 w-full z-50
        backdrop-blur-md
        border-b border-white/5
        bg-black/40
        "
      >
        <Container>
          <div className="h-20 flex items-center justify-between">
            
            {/* Logo */}
            <h2 className="font-bold text-white">CVS GFX</h2>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 text-white">
              <a href="#">Work</a>
              <a href="#">Services</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>

            {/* Mobile Hamburger */}
            <div className="md:hidden text-white z-[60]">
              <Hamburger toggled={open} toggle={setOpen} size={22} />
            </div>

          </div>
        </Container>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`
          fixed inset-0 z-40
          flex flex-col items-center justify-center
          bg-black/95 backdrop-blur-md
          transition-transform duration-300
          md:hidden
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <nav className="flex flex-col gap-8 text-xl text-white text-center">
          <a onClick={() => setOpen(false)} href="#">Work</a>
          <a onClick={() => setOpen(false)} href="#">Services</a>
          <a onClick={() => setOpen(false)} href="#">About</a>
          <a onClick={() => setOpen(false)} href="#">Contact</a>
        </nav>
      </div>
    </>
  );
}