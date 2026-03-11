import React from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData.json";

const { skills } = portfolioData;

const skillGroups = [
  {
    num: "01",
    title: "PROGRAMMING, TOOLS & VISUALIZATION",
    tags: skills.languagesTools,
  },
  {
    num: "02",
    title: "DATABASES",
    tags: skills.databases,
  },
  {
    num: "03",
    title: "CORE DATA SKILLS",
    tags: skills.coreSkills,
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const rowVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 md:px-12" style={{ background: "#FF4D00" }}>
      <div className="max-w-6xl mx-auto">
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#000", letterSpacing: "0.2em", marginBottom: "1rem" }}>
          03 — SKILLS
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(3rem, 9vw, 7rem)",
            letterSpacing: "-0.04em", lineHeight: 0.87,
            color: "#000", textTransform: "uppercase", marginBottom: "3rem",
          }}
        >
          SKILLS
        </motion.h2>

        <motion.div
          className="border-t-2 border-black"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.num}
              variants={rowVariant}
              className="border-b-2 border-black group transition-colors duration-300 hover:bg-black p-7"
            >
              <div className="flex items-start gap-6">
                <span className="font-['Space_Mono'] text-[11px] text-black tracking-[0.1em] min-w-[2.5rem] pt-1.5 transition-colors duration-300 group-hover:text-[#FF4D00]">
                  {group.num}
                </span>

                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <h3 className="font-['Archivo_Black'] text-[clamp(1.2rem,3vw,2rem)] tracking-[-0.04em] text-black uppercase m-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white">
                      {group.title}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-['Space_Mono'] text-[11px] px-3 py-1 border-2 border-black text-black bg-transparent transition-colors duration-300 group-hover:border-[#FF4D00] group-hover:text-[#FF4D00]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
