import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollVelocity.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVelocity({
  texts = [],
  velocity = 100,
  velocityMapping = { input: [0, 300], output: [0, 2] },
  className = "",
}) {
  const containerRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".parallax");

      rows.forEach((row, index) => {
        const scroller = row.querySelector(".scroller");
        const direction = index % 2 !== 0 ? -1 : 1; 

        // Set default text scrolling via gsap ticker for smooth infinite scroll
        let xPos = 0;
        let animationVelocity = velocity * direction;

        gsap.ticker.add(() => {
          xPos -= animationVelocity * 0.016; // approx 60fps ticker speed
          
          if (xPos <= -50 && direction === 1) xPos = 0;
          if (xPos >= 0 && direction === -1) xPos = -50;
          
          gsap.set(scroller, { xPercent: xPos });
        });

        // Setup scroll velocity scaling
        const trigger = ScrollTrigger.create({
          trigger: row,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const currentVelocity = self.getVelocity();
            // Scale velocity factor based on scroll speed mapping
            const scrollVelocity = Math.abs(currentVelocity);
            const inputMin = velocityMapping.input[0];
            const inputMax = velocityMapping.input[1];
            const outputMin = velocityMapping.output[0];
            const outputMax = velocityMapping.output[1];
            
            // Linear map of the scroll speed to output multiplier
            const ratio = Math.max(0, Math.min(1, (scrollVelocity - inputMin) / (inputMax - inputMin)));
            const velocityMultiplier = outputMin + ratio * (outputMax - outputMin);

            animationVelocity = (velocity + (velocity * velocityMultiplier)) * direction;
          },
        });
        scrollTriggerRef.current = trigger;
      });
    }, containerRef);

    return () => {
      ctx.revert();
      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
    };
  }, [velocity, velocityMapping]);

  return (
    <div ref={containerRef} className="scroll-velocity-wrapper">
      {texts.map((text, index) => (
        <div key={index} className="parallax">
          <div className={`scroller ${className}`}>
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex-shrink-0">
                {text}{" "}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
