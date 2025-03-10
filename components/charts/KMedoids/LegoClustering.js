"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const COLOURS = ["#ff0000", "#ffcc00", "#0077b6", "#009933", "#6a0572"];

// Dimensions for each LEGO brick
const BRICK_SIZE = { width: 40, height: 20 };

/**
 * Explanation stages:
 * 0. Chaotic distribution (no grouping)
 * 1. Group bricks by colour
 * 2. Randomly highlight a medoid brick in each group
 * 3. Patterns become more apparent
 * 4. Final insights
 */
const STAGES = [
  "Imagine a messy heap of LEGO bricks. Pure chaos.",
  "Sorting begins. Similar bricks group together. All red bricks in one pile, all blue in another.",
  "Each group now has a medoid, the brick that best represents its group.",
  "Patterns become clear. Deeper insights form.",
  "Let’s take a look at what these groups actually tell us."
];

export default function LegoMedoidExplainer() {
  const [stage, setStage] = useState(0);

  /**
   * We'll store a random "medoid" for each colour group in this state.
   * E.g. medoids["#ff0000"] = <brickIndex>
   */
  const [medoids, setMedoids] = useState({});

  /**
   * Whenever we reach stage 2, pick one random brick from each colour group
   * as the medoid (i.e. its representative).
   */
  useEffect(() => {
    if (stage === 2) {
      const newMedoids = {};
      // We have 5 colours. Each has exactly 8 bricks (total 40).
      // We want to pick one random index for each colour group.
      COLOURS.forEach((colour) => {
        // Generate 8 indexes (0..39) that correspond to this colour.
        const indexesForColour = [];
        for (let i = 0; i < 40; i++) {
          if (COLOURS[i % COLOURS.length] === colour) {
            indexesForColour.push(i);
          }
        }
        // Pick a random index from that colour array as the medoid.
        const randomIndex = Math.floor(Math.random() * indexesForColour.length);
        newMedoids[colour] = indexesForColour[randomIndex];
      });
      setMedoids(newMedoids);
    }
  }, [stage]);

  /**
   * Handle stage changes: progress on click, loop back to 0 at the end.
   */
  const handleTap = () => {
    setStage((prev) => (prev < STAGES.length - 1 ? prev + 1 : 0));
  };

  /**
   * To position bricks neatly when grouped by colour, we track usage counts
   * so that each colour forms its own column without overlap.
   */
  const colourUsageCounts = { "#ff0000": 0, "#ffcc00": 0, "#0077b6": 0, "#009933": 0, "#6a0572": 0 };

  return (
    <Card
      className="w-[1200px] h-[800px] flex flex-col bg-[#f4f4f4] overflow-hidden cursor-pointer"
      onClick={handleTap}
    >
      {/* Animated header describing the current stage */}
      <CardHeader className="border-b border-border">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="mb-4">{STAGES[stage]}</CardTitle>
          </motion.div>
        </AnimatePresence>
      </CardHeader>

      {/* LEGO brick animation area */}
      <CardContent className="relative flex-1 flex items-center justify-center">
        {Array.from({ length: 40 }).map((_, i) => {
          // Colour for this brick
          const colour = COLOURS[i % COLOURS.length];

          // Check if this brick is the medoid for its colour
          const isMedoid = stage >= 2 && medoids[colour] === i;

          // For grouping (stage >= 1), determine the position using colour
          let targetX = Math.random() * 600 - 300; // default random chaos
          let targetY = Math.random() * 400 - 200; // default random chaos
          let targetRotate = Math.random() * 360;

          // If we're grouping by colour (stage >= 1) …
          if (stage >= 1) {
            const usageIndex = colourUsageCounts[colour];
            colourUsageCounts[colour] = usageIndex + 1;

            // Spread out bricks of the same colour in a column
            // so each colour forms a neat pile:
            targetX = (COLOURS.indexOf(colour) - 2) * 90;   // columns for each colour
            targetY = -100 + usageIndex * 30;              // step them vertically
            targetRotate = 0;
          }

          return (
            <motion.div
              key={i}
              className="absolute rounded-lg"
              style={{
                backgroundColor: colour,
                width: isMedoid ? BRICK_SIZE.width * 1.5 : BRICK_SIZE.width,
                height: isMedoid ? BRICK_SIZE.height * 1.5 : BRICK_SIZE.height,
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow:
                  "inset 0px -3px 0px rgba(0,0,0,0.2), 0px 3px 5px rgba(0,0,0,0.2)"
              }}
              // Start each brick at a random position, scale, and rotation
              initial={{
                x: Math.random() * 600 - 300,
                y: Math.random() * 400 - 200,
                rotate: Math.random() * 360,
                scale: 0.9
              }}
              // Animate to the grouped position or remain random in stage 0
              animate={{
                x: targetX,
                y: targetY,
                rotate: isMedoid ? 5 : targetRotate,
                scale: isMedoid ? 1.3 : 1
              }}
              // Using spring transitions for smooth, natural motion
              transition={{
                x: { type: "spring", stiffness: 60, damping: 15 },
                y: { type: "spring", stiffness: 60, damping: 15 },
                rotate: { type: "spring", stiffness: 60, damping: 15 },
                scale: { type: "spring", stiffness: 120, damping: 10 }
              }}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}