import React, { useState, forwardRef, useImperativeHandle } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

function Card({
  card,
  index,
  cardsLength,
  sendToBackOnClick,
  randomRotation,
  sendToBack,
}) {
  const isFront = index === cardsLength - 1;

  const dragX = useMotionValue(0);

  // When dragged beyond ~200px threshold, rotate based on direction
  const rotate = useTransform(
    dragX,
    [-300, 300],
    [-25, 25]
  );
  
  // If randomRotation is active, slightly tilt background cards
  const randomRotateValue = randomRotation && !isFront 
    ? Math.random() * 20 - 10 
    : 0;

  const handleDragEnd = (_, info) => {
    // If we dragged past threshold (e.g. 150px) -> send to back
    if (Math.abs(info.offset.x) > 150) {
      sendToBack();
    }
  };

  return (
    <motion.div
      // Drag props: only top card draggable
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
      style={{
        x: isFront ? dragX : 0,
        rotate: isFront ? rotate : randomRotateValue,
        zIndex: index,
      }}
      // Entrance & dynamic positioning 
      initial={{ scale: 0.8, y: 100, opacity: 0 }}
      animate={{
        rotateZ: (cardsLength - index - 1) * 4,
        scale: 1 + index * 0.06 - cardsLength * 0.06,
        transformOrigin: "90% 90%",
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      onClick={() => {
        if (isFront && sendToBackOnClick) sendToBack();
      }}
      className={`absolute w-full h-full cursor-${isFront ? "grab" : "default"} active:cursor-grabbing`}
    >
      {card}
    </motion.div>
  );
}

const Stack = forwardRef(({
  cards: initialCards = [],
  randomRotation = false,
  sensitivity = 300,
  sendToBackOnClick = false,
}, ref) => {
  const [stack, setStack] = useState(initialCards);

  const sendToBack = () => {
    setStack((prev) => {
      const newStack = [...prev];
      const topCard = newStack.pop();
      newStack.unshift(topCard);
      return newStack;
    });
  };

  const nextCard = () => {
    sendToBack();
  };

  const prevCard = () => {
    setStack((prev) => {
      const newStack = [...prev];
      const first = newStack.shift();
      newStack.push(first);
      return newStack;
    });
  };

  useImperativeHandle(ref, () => ({
    nextCard,
    prevCard
  }));

  if (!stack.length) return null;

  return (
    <div className="relative w-full h-full perspective-1000">
      {stack.map((card, index) => (
        <Card
          key={card.key || index} 
          card={card}
          index={index}
          cardsLength={stack.length}
          sendToBack={sendToBack}
          sendToBackOnClick={sendToBackOnClick}
          randomRotation={randomRotation}
          sensitivity={sensitivity}
        />
      ))}
    </div>
  );
});

export default Stack;
