import React from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
  useMotionValue
} from "framer-motion";
import portfolioData from "../data/portfolioData.json";

export default function MarqueeSection() {
  const { skills } = portfolioData;
  const row1 = skills.languagesTools.join(" • ") + " • ";
  const row2 = skills.coreSkills.join(" • ") + " • ";

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 3]
  );

  const baseX = useMotionValue(0);
  const baseX2 = useMotionValue(0);
  const baseSpeed = 5; // using percentage instead of pixels for robust looping

  const x1 = useTransform(baseX, (v) => `${v}%`);
  const x2 = useTransform(baseX2, (v) => `${v}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = baseSpeed * (delta / 1000);

    // Speed up based on scroll velocity (absolute so it speeds up regardless of scroll direction)
    moveBy += moveBy * Math.abs(velocityFactor.get());

    // Row 1 loops left
    let newX1 = baseX.get() - moveBy;
    if (newX1 <= -50) newX1 += 50; 
    baseX.set(newX1);

    // Row 2 loops right
    let newX2 = baseX2.get() + moveBy;
    if (newX2 >= 0) newX2 -= 50; // starts around -50 and moves to 0
    baseX2.set(newX2);
  });

  return (
    <section
      className="skew-both relative overflow-hidden py-20"
      style={{ background: "#000" }}
    >
      <div className="space-y-4 py-4">
        {/* Row 1 – orange */}
        <div className="overflow-hidden">
          <motion.div style={{ x: x1 }} className="whitespace-nowrap flex">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  color: "#FF4D00",
                  letterSpacing: "-0.04em",
                  paddingRight: "2rem",
                }}
              >
                {row1}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2 – white, opposite direction */}
        <div className="overflow-hidden">
          <motion.div style={{ x: x2 }} className="whitespace-nowrap flex">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  color: "#fff",
                  letterSpacing: "-0.04em",
                  paddingRight: "2rem",
                }}
              >
                {row2}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
