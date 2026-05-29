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
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        border-b
        border-white/5
        bg-black/40
        "
      >
        <Container>
          <div
            className="
            h-20
            flex
            items-center
            justify-between
            "
          >
            <h2
  className="
  text-white
  text-3xl
  md:text-4xl
  font-black
  tracking-wider
  pl-6
  "
>
  CVS GFX
</h2>

            <nav
              className="
              hidden
              md:flex
              items-center
              gap-8
              text-white
              text-sm
              lg:text-base
              "
            >
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Work</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Services</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">About</a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
            </nav>

            <div className="md:hidden text-white z-[60]">
              <Hamburger toggled={open} toggle={setOpen} size={24} />
            </div>
          </div>
        </Container>
      </header>

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
        <nav className="flex flex-col gap-8 text-2xl font-semibold text-white text-center">
          <a onClick={() => setOpen(false)} href="#" className="hover:text-purple-400 transition-colors">Work</a>
          <a onClick={() => setOpen(false)} href="#" className="hover:text-purple-400 transition-colors">Services</a>
          <a onClick={() => setOpen(false)} href="#" className="hover:text-purple-400 transition-colors">About</a>
          <a onClick={() => setOpen(false)} href="#" className="hover:text-purple-400 transition-colors">Contact</a>
        </nav>
      </div>
    </>
  );
}