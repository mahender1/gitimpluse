import React from "react";
import { motion } from "framer-motion";

const MarqueeHeading = () => {
  return (
    <div className="overflow-hidden bg-[#191919] whitespace-nowrap">
      <motion.div
        className="flex w-max"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Duplicated content for seamless looping */}
        <div className="flex">
          <h3 className="uppercase tracking-widest font-semibold text-5xl text-white px-8 py-3">
            focus on your <span className="text-[#E52713]">workouts</span>
          </h3>
          <h3 className="uppercase tracking-widest font-semibold text-5xl text-white px-8 py-3">
            focus on your <span className="text-[#E52713]">workouts</span>
          </h3>
        </div>
        <div className="flex">
          <h3 className="uppercase tracking-widest font-semibold text-5xl text-white px-8 py-3">
            focus on your <span className="text-[#E52713]">workouts</span>
          </h3>
          <h3 className="uppercase tracking-widest font-semibold text-5xl text-white px-8 py-3">
            focus on your <span className="text-[#E52713]">workouts</span>
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

export default MarqueeHeading;
