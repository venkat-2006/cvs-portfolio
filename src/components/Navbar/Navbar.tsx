"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; // Added to detect the active page URL route path
import { Spin as Hamburger } from "hamburger-react";
import Container from "../Layout/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // Tracks if we are at "/" or an inner page like "/works/gaming"

  // Helper function to dynamically calculate correct anchors based on folder routes
  const getHref = (targetId: string) => {
    if (pathname === "/") {
      return targetId; // If on home page, use simple hash mapping: "#showcase"
    }
    return `/${targetId}`; // If on inner works page, force cross-route re-direct: "/#showcase"
  };

  const navLinks = [
    { label: "Work", id: "#showcase" },
    { label: "Services", id: "#services" },
    { label: "Reviews", id: "#testimonials" },
    { label: "Lab", id: "#creative-lab" },
    { label: "FAQ", id: "#faq" },
    { label: "Contact", id: "#contact" },
  ];

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
            {/* Logo anchor that dynamically routes home */}
            <a href={pathname === "/" ? "#hero" : "/"} className="hover:opacity-80 transition-opacity">
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
            </a>

            {/* DESKTOP NAVIGATION */}
            <nav
              className="
              hidden
              md:flex
              items-center
              gap-8
              text-white
              text-sm
              lg:text-base
              font-medium
              "
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={getHref(link.id)}
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="md:hidden text-white z-[60]">
              <Hamburger toggled={open} toggle={setOpen} size={24} />
            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE NAVIGATION MENU OVERLAY */}
      <div
        className={`
          fixed inset-0 z-40
          flex flex-col items-center justify-center
          bg-black/95 backdrop-blur-md
          transition-transform duration-300
          md:hidden
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <nav className="flex flex-col gap-8 text-2xl font-semibold text-white text-center">
          {navLinks.map((link) => (
            <a
              key={`mobile-${link.id}`}
              onClick={() => setOpen(false)}
              href={getHref(link.id)}
              className="hover:text-purple-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}