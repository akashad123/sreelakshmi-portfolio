import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import portfolioData from "../data/portfolioData.json";

export default function About() {
  const { about, education } = portfolioData;

  return (
    <section
      id="about"
      className="skew-top relative py-16 md:py-24 lg:py-28 px-6 md:px-10 lg:px-16"
      style={{ background: "#000" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(10px, 2vw, 11px)",
            color: "#FF4D00",
            letterSpacing: "0.2em",
            marginBottom: "1rem",
          }}
        >
          02 — ABOUT
        </p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(2.5rem, 8vw, 7rem)",
            letterSpacing: "-0.04em",
            lineHeight: 0.87,
            color: "#fff",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}
        >
          ABOUT
        </motion.h2>

        {/* Flat Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div
            style={{
              background: "#000",
              border: "2px solid #fff",
              padding: "clamp(1.5rem, 5vw, 2.5rem)",
            }}
          >
            <div className="w-full border-t-2 border-white pt-6 md:pt-8">
              {/* Bio */}
              <div style={{ fontFamily: "'Inter', sans-serif", color: "#fff" }}>
                <ScrollReveal
                  baseOpacity={0.1}
                  enableBlur
                  baseRotation={3}
                  blurStrength={4}
                  containerClassName="w-full"
                  textClassName="text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-inter"
                >
                  {about.description}
                </ScrollReveal>
              </div>

              {/* Education */}
              <div className="mt-8 md:mt-12 space-y-4 border-t border-white/30 pt-6 md:pt-8">
                <h3 className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#FF4D00] mb-4 md:mb-6">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="m-0">
                    <ScrollReveal
                      baseOpacity={0.1}
                      enableBlur
                      baseRotation={2}
                      blurStrength={3}
                      textClassName="text-sm md:text-base lg:text-lg text-white font-inter"
                    >
                      {`${edu.degree} — ${edu.institution} (${edu.duration})`}
                    </ScrollReveal>
                  </div>
                ))}
              </div>

              {/* Download CV */}
              <div className="mt-8 md:mt-10">
                <a
                  href="/Sreelakshmi_PM_Data_Analyst.pdf"
                  download
                  className="inline-flex items-center gap-3 self-start rounded-full px-4 md:px-6 py-2 md:py-3 transition-transform duration-300 hover:translate-x-2"
                  style={{
                    background: "#FF4D00",
                    color: "#000",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "clamp(10px, 2vw, 12px)",
                    textDecoration: "none",
                    border: "2px solid #FF4D00",
                    textTransform: "uppercase",
                  }}
                >
                  DOWNLOAD CV
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
