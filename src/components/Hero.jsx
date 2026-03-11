import React from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import GlitchText from "./GlitchText";
import portfolioData from "../data/portfolioData.json";

/* ─── entrance variants ──────────────────────────────── */
const titleVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const metaVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.5, ease: "easeOut" },
  },
};

const summaryVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const { personal, professionalSummary, skills } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-16 md:pt-20 lg:pt-24 pb-0 px-6 md:px-10 lg:px-16 overflow-hidden"
      style={{ background: "#FF4D00" }}
    >
      <div className="flex-1 flex flex-col justify-center">
        {/* ── Glitch Title ── */}
        <motion.div variants={titleVariant} initial="hidden" animate="visible">
          <h1 style={{ margin: 0, lineHeight: 0.87 }}>
            <GlitchText
              speed={3}
              enableShadows
              enableOnHover={false}
              className="font-['Archivo_Black'] uppercase tracking-[-0.04em] text-[clamp(4rem,12vw,10rem)]"
            >
              DATA ANALYST
            </GlitchText>
          </h1>

          <h4
            style={{
              margin: 0,
              lineHeight: 0.87,
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {personal.subtitle}
          </h4>
        </motion.div>

        {/* ── Divider ── */}
        <motion.hr
          variants={metaVariant}
          initial="hidden"
          animate="visible"
          style={{
            border: "none",
            borderTop: "2px solid #000",
            margin: "2rem 0 1.5rem",
          }}
        />

        {/* ── Meta row ── */}
        <motion.div
          variants={metaVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4"
        >
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(12px, 3vw, 18px)",
              color: "#fff",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            BASED IN
            <br />
            {personal.location.toUpperCase()}
          </p>

          <div className="flex justify-center flex-shrink-0">
            <ScrollIndicator />
          </div>

          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(12px, 3vw, 18px)",
              color: "#fff",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {skills.languagesTools.slice(0, 3).join(" • ").toUpperCase()}
            <br />
            DATA ANALYTICS
          </p>
        </motion.div>

        {/* ── Summary ── */}
        <motion.div
          variants={summaryVariant}
          initial="hidden"
          animate="visible"
          className="mt-6 md:mt-8 grid md:grid-cols-2 gap-8 border-t-2 border-black pt-4 md:pt-6 pb-6 md:pb-10"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: 1.7,
              color: "#fff",
              margin: 0,
            }}
          >
            {professionalSummary}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
