import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import portfolioData from "../data/portfolioData.json";

const { projects } = portfolioData;

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      className="skew-top relative py-16 md:py-24 lg:py-28 px-6 md:px-10 lg:px-16"
      style={{ background: "#000" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(10px, 2vw, 11px)",
            color: "#FF4D00",
            letterSpacing: "0.2em",
            marginBottom: "1rem",
          }}
        >
          04 — PROJECTS
        </p>

        {/* Section Title */}
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
          PROJECTS
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 pt-6 md:pt-8 border-t-2 border-white"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#FF4D00] text-black flex flex-col justify-between p-4 md:p-6 border-2 border-black min-h-[280px] transition-all duration-300 hover:bg-black hover:text-white hover:border-[#FF4D00] hover:-translate-y-1"
            >
              <div>
                <p className="font-['Space_Mono'] text-[clamp(10px, 2vw, 11px)] tracking-[0.15em] mb-2">
                  {`0${index + 1}`}
                </p>

                <h3 className="font-['Archivo_Black'] uppercase text-[clamp(1rem, 3vw, 1.5rem)] leading-tight mb-2">
                  {project.title}
                </h3>

                <p className="text-[clamp(0.875rem, 2vw, 1rem)] font-inter leading-relaxed opacity-90">
                  {project.description[0]}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="border-2 border-black px-2 py-1 text-[clamp(9px, 1.5vw, 10px)] font-['Space_Mono'] uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-6 font-['Space_Mono'] text-[clamp(10px, 2vw, 11px)] uppercase hover:translate-x-1 transition inline-block"
              >
                VIEW CODE →
              </a>
            </div>
          ))}
        </motion.div>

        {/* Resume / GitHub Section */}
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-between border-t-2 border-white pt-6 md:pt-8 gap-4">
          {/* View More GitHub */}
          <a
            href="https://github.com/sreelakshmipm008"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Space_Mono'] text-[clamp(10px, 2vw, 11px)] text-white tracking-[0.1em] hover:translate-x-1 transition inline-block"
          >
            VIEW MORE →
          </a>
        </div>
      </div>
    </section>
  );
}
