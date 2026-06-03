"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">

      {/* Rhombus background */}
      <div 
        className="absolute inset-0 -z-20 bg-green-600"
        style={{
          clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
        }}
      />

      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500 opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-28 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-1 text-sm rounded-full border border-white/20 backdrop-blur"
        >
          ✨ New release
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Build something{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            beautiful
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-white/70 max-w-xl mx-auto"
        >
          A modern Next.js starter with smooth animations, glowing UI, and clean design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-yellow-500 font-medium shadow-lg hover:scale-105 transition">
            Get Started
          </button>

          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-red-500 font-medium shadow-lg hover:scale-105 transition">
            Live Demo
          </button>
        </motion.div>
      </div>

      {/* Multi-orbit system */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px]">

        {/* Outer slow orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-90">
            <ellipse
              cx="100"
              cy="100"
              rx="90"
              ry="60"
              stroke="red"
              strokeWidth="0.9"
              fill="none"
            />
          </svg>
        </motion.div>

        {/* Middle orbit */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-90">
            <ellipse
              cx="100"
              cy="100"
              rx="70"
              ry="45"
              stroke="lime"
              strokeWidth="0.8"
              fill="none"
            />
          </svg>
        </motion.div>

        {/* Inner fast orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-90">
            <ellipse
              cx="100"
              cy="100"
              rx="50"
              ry="30"
              stroke="yellow"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </motion.div>

      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 200">
          <path
            fill="#ffffff"
            d="M0,160L80,150C160,140,320,120,480,110C640,100,800,100,960,110C1120,120,1280,140,1360,150L1440,160V200H0Z"
          />
        </svg>
      </div>
    </section>
  );
}