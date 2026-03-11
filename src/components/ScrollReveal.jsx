import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  baseOpacity = 0.1,
  enableBlur = true,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  scrollTriggerOptions = {},
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".word");
    if (!words.length) return;

    const filterStart = enableBlur ? `blur(${blurStrength}px)` : "none";
    const filterEnd = enableBlur ? "blur(0px)" : "none";

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1, // smooth scrubbing
      ...scrollTriggerOptions,
      animation: gsap.fromTo(
        words,
        {
          opacity: baseOpacity,
          rotation: baseRotation,
          filter: filterStart,
          willChange: "opacity, filter",
        },
        {
          opacity: 1,
          rotation: 0,
          filter: filterEnd,
          stagger: 0.05,
          ease: "none",
        }
      ),
    });

    return () => {
      trigger.kill();
    };
  }, [baseOpacity, enableBlur, baseRotation, blurStrength]);

  // Split text into words if it's a string
  const textContent = typeof children === "string" ? children : "";
  const words = textContent.split(" ").map((word, i) => (
    <span key={i} className={`word ${textClassName}`} style={{ display: "inline-block", marginRight: "0.25em" }}>
      {word}
    </span>
  ));

  return (
    <div ref={containerRef} className={`scroll-reveal-container ${containerClassName}`}>
      {words}
    </div>
  );
}
