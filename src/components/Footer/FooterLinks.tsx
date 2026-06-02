import React from "react";

interface SocialLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Email Contact", href: "mailto:hello@designer.com" }
];

export default function FooterLinks() {
  return (
    <div className="w-full py-16">
      {/* Dynamic Grid Layout Track Configuration mapping requirements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
        {socialLinks.map((link, idx) => (
          <a
            key={`footer-btn-${idx}`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.01] p-6 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.03] hover:shadow-[0_15px_30px_rgba(147,51,234,0.1)]"
          >
            <span 
              className="text-sm font-medium tracking-wide text-zinc-400 group-hover:text-white transition-colors duration-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {link.label}
            </span>
            
            {/* Minimal Vector Arrow Icon Node */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-950 text-zinc-400 group-hover:border-purple-500/40 group-hover:text-purple-300 transition-all duration-500">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}