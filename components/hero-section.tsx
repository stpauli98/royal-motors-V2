"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="početna" className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{
            x: mousePosition.x / 50,
            y: mousePosition.y / 50,
          }}
          transition={{ type: "spring", damping: 100, stiffness: 100 }}
          className="w-full h-full"
        >
          <Image src="/car-transport.png" alt="Test image" fill priority className="object-cover brightness-50" />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden"
      >
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-blue-900/20 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-[30%] left-[15%] w-80 h-80 rounded-full bg-yellow-500/20 blur-3xl"
        />
      </motion.div>

      {/* Floating car silhouettes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-[15%] right-[20%]"
        >
          <Image src="/car-transport.png" alt="Test image" width={200} height={100} className="opacity-30" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-[25%] left-[15%]"
        >
          <Image src="/car-transport.png" alt="Test image" width={180} height={90} className="opacity-30" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 relative"
            >
              <span className="relative z-10">Pronađite savršen automobil za vas</span>
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "40%" }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-2 left-0 h-1 bg-yellow-500"
              ></motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-8"
            >
              Royal Motors vam nudi širok izbor kvalitetnih polovnih automobila i profesionalnu uslugu uvoza vozila po
              vašim željama.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/#ponuda-vozila" className="btn-primary inline-block">
                  Pogledajte ponudu
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#uvoz-po-narudžbi"
                  className="bg-transparent hover:bg-white/20 text-white border border-white font-medium py-2 px-6 rounded-md transition-all duration-300"
                >
                  Uvoz po narudžbi
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center"
        >
          <span className="text-white text-sm mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-2 bg-white rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
