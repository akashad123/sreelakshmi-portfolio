import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="relative flex items-center justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[144px] lg:h-[144px]">
      
      {/* Rotating text ring */}
      <motion.svg
        viewBox="0 0 144 144"
        className="absolute inset-0 w-full h-full"
        style={{ rotate }}
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
          letterSpacing="2px"
          textTransform="uppercase"
        >
          <textPath href="#circlePath" startOffset="0%">
            LET'S EXPLORE • LET'S EXPLORE •
          </textPath>
        </text>
      </motion.svg>

      {/* Center Arrow */}
      <ArrowDown
        size={20}
        color="#fff"
        strokeWidth={2}
        className="absolute sm:size-[24px] md:size-[28px] lg:size-[32px]"
      />
    </div>
  );
}