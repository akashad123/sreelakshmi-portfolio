import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import portfolioData from "../data/portfolioData.json";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-12"
      style={{ background: "#FF4D00" }}
    >
      <div className="max-w-6xl mx-auto">
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#000", letterSpacing: "0.2em", marginBottom: "1rem" }}>
          05 — CONTACT
        </p>

        {/* Headline */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(3.5rem, 11vw, 10rem)",
            letterSpacing: "-0.04em", lineHeight: 0.87,
            color: "#000", textTransform: "uppercase", marginBottom: "3rem",
          }}
        >
          LET&apos;S ANALYZE
          <br />DATA
          <br />TOGETHER
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t-2 border-black pt-10 grid md:grid-cols-2 gap-12"
        >
          {/* Contact info */}
          <div className="space-y-6">
            {[
              { label: "EMAIL",    value: portfolioData.personal.email,    href: `mailto:${portfolioData.personal.email}` },
              { label: "PHONE",   value: portfolioData.personal.phone,     href: `tel:${portfolioData.personal.phone.replace(/\s+/g, '')}` },
              { label: "GITHUB",  value: "github.com/" + portfolioData.personal.github.split('/').pop(),        href: portfolioData.personal.github },
              { label: "LINKEDIN",value: "linkedin.com/in/" + portfolioData.personal.linkedin.split('/in/')[1], href: portfolioData.personal.linkedin },
            ].map(({ label, value, href }) => (
              <div key={label} className="border-b-2 border-black pb-4">
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", color: "#000", margin: "0 0 4px" }}>
                  {label}
                </p>
                <a href={href} style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#000", textDecoration: "none", fontWeight: 600 }} className="hover:underline">
                  {value}
                </a>
              </div>
            ))}
          </div>

          {/* CTA + resume */}
          <div className="flex flex-col justify-between gap-8">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-6 text-center transition-all duration-300 hover:translate-y-1 hover:bg-white hover:text-black hover:border-black"
              style={{
                background: "#000", color: "#FF4D00",
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                letterSpacing: "-0.03em", textTransform: "uppercase",
                textDecoration: "none", border: "2px solid #000",
              }}
            >
              CONTACT ME
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>

            <a
              href="/Sreelakshmi_Resume_DataAnalyst.pdf"
              download
              className="inline-flex items-center gap-3 self-start rounded-full px-6 py-3 transition-transform duration-300 hover:translate-x-2"
              style={{
                background: "transparent", color: "#000",
                fontFamily: "'Space Mono', monospace", fontSize: "12px",
                textDecoration: "none", border: "2px solid #000",
              }}
            >
              DOWNLOAD CV
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
