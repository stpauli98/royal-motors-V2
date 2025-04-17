"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function getRandomDots(count: number, colorClass: string, yRange: number, xRange: number, opacity: [number, number, number], durationBase: number, durationVar: number) {
  return Array.from({ length: count }).map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    y: Math.random() * yRange - yRange / 2,
    x: Math.random() * xRange - xRange / 2,
    opacity,
    duration: durationBase + Math.random() * durationVar,
    colorClass,
  }));
}

function FloatingDots() {
  const [dots, setDots] = useState<any[]>([]);
  useEffect(() => {
    setDots(getRandomDots(20, "bg-blue-900/30", 50, 50, [0.3, 0.7, 0.3], 5, 10));
  }, []);
  return (
    <div className="absolute left-0 right-0 top-0 bottom-0">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${dot.colorClass}`}
          style={{ left: `${dot.left}%`, top: `${dot.top}%` }}
          animate={{ y: [0, dot.y, 0], x: [0, dot.x, 0], opacity: dot.opacity }}
          transition={{ duration: dot.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function FloatingGoldDots() {
  const [dots, setDots] = useState<any[]>([]);
  useEffect(() => {
    setDots(getRandomDots(15, "bg-yellow-500/40", 70, 70, [0.4, 0.8, 0.4], 7, 8));
  }, []);
  return (
    <div className="absolute left-0 right-0 top-0 bottom-0">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${dot.colorClass}`}
          style={{ left: `${dot.left}%`, top: `${dot.top}%` }}
          animate={{ y: [0, dot.y, 0], x: [0, dot.x, 0], opacity: dot.opacity }}
          transition={{ duration: dot.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function FloatingElements() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating circles */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-blue-900/5 -left-20 top-[20%]"
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          translateY: scrollY * 0.1,
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-yellow-500/5 -right-40 top-[40%]"
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          translateY: scrollY * 0.05,
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full bg-blue-900/5 left-[60%] top-[70%]"
        animate={{
          y: [0, 50, 0],
          x: [0, 25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          translateY: scrollY * -0.08,
        }}
      />

      {/* Floating lines */}
      <motion.div
        className="absolute h-[1px] w-[300px] bg-gradient-to-r from-transparent via-blue-900/20 to-transparent left-[10%] top-[30%] rotate-[30deg]"
        animate={{
          y: [0, 100, 0],
          rotate: [30, 60, 30],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          translateY: scrollY * 0.2,
        }}
      />

      <motion.div
        className="absolute h-[1px] w-[400px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent right-[5%] top-[60%] -rotate-[20deg]"
        animate={{
          y: [0, -80, 0],
          rotate: [-20, -40, -20],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          translateY: scrollY * -0.15,
        }}
      />

      {/* Floating dots */}
      {/* Floating dots */}
      <FloatingDots />
      {/* Floating gold dots */}
      <FloatingGoldDots />
    </div>
  )
}
