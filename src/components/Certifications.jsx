import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import portfolioData from "../data/portfolioData.json";

export default function Certifications() {
  const { certifications } = portfolioData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="certifications"
      className="relative py-16 md:py-24 lg:py-28 px-6 md:px-10 lg:px-16"
      style={{ background: "#000", color: "#fff" }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(10px, 2vw, 11px)",
            color: "#FF4D00",
            letterSpacing: "0.2em",
            marginBottom: "1rem",
          }}
        >
          04.5 — CERTIFICATIONS
        </p>

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
          CERTIFICATIONS
        </motion.h2>

        <motion.div
          className="border-t-2 border-white"
          variants={containerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="border-b-2 border-white group transition-colors duration-300 hover:bg-[#FF4D00] p-4 md:p-6 lg:p-7"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <span className="font-['Space_Mono'] text-[clamp(10px, 2vw, 11px)] text-[#FF4D00] tracking-[0.1em] min-w-[2.5rem] pt-1.5 transition-colors duration-300 group-hover:text-black">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <h3 className="font-['Inter'] font-semibold text-[clamp(0.95rem, 2vw, 1.4rem)] leading-snug text-white m-0 transition-all duration-300 group-hover:translate-x-2 group-hover:text-black uppercase">
                    {cert}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
