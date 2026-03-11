import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  // Rotate exactly 360 degrees over the full scroll length.
  // We double it to 720 just so it spins a bit more noticeably, but keeping it simple.
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="relative flex items-center justify-center w-[144px] h-[144px]">
      {/* Rotating text ring */}
      <motion.svg
        width="144"
        height="144"
        viewBox="0 0 144 144"
        className="absolute inset-0"
        style={{ rotate, willChange: "transform" }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 72,72
               m -50,0
               a 50,50 0 1,1 100,0
               a 50,50 0 1,1 -100,0"
          />
        </defs>
        <text
          fontSize="12"
          fontFamily="'Space Mono', monospace"
          fill="#fff"
          letterSpacing="2.5px"
          textTransform="uppercase"
        >
          <textPath href="#circlePath" startOffset="0%">
            LET'S EXPLORE • LET'S EXPLORE{" "}
          </textPath>
        </text>
      </motion.svg>

      {/* Center Arrow */}
      <ArrowDown size={32} color="#fff" strokeWidth={2} className="absolute" />
    </div>
  );
}
