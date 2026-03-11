import React from "react";
import portfolioData from "../data/portfolioData.json";

export default function Footer() {
  const year = 2026;

  return (
    <footer
      className="relative px-6 md:px-10 lg:px-16 py-6 md:py-8"
      style={{
        background: "#000",
        borderTop: "2px solid #FF4D00",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(10px, 2vw, 12px)",
            color: "#fff",
            margin: 0,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          © {year} {portfolioData.personal.name}
        </p>

        {/* Right – social links */}
        <div className="flex items-center gap-4 md:gap-6">
          {[
            {
              label: "GITHUB",
              href: portfolioData.personal.github,
            },
            {
              label: "LINKEDIN",
              href: portfolioData.personal.linkedin,
            },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:text-orange-500"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "clamp(10px, 2vw, 12px)",
                color: "#fff",
                textDecoration: "none",
                letterSpacing: "0.1em",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
