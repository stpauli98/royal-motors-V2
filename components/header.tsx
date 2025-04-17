"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white shadow-md"
      }`}
    >
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="flex items-center space-x-2 relative z-10">
          <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
            <Image src="/favicon.ico" alt="Royal Motors Logo" width={40} height={40} />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl font-bold text-blue-900"
          >
            Royal Motors
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Početna", "O nama", "Ponuda vozila", "Uvoz po narudžbi"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={`/#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-gray-700 hover:text-blue-900 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden md:block"
        >
          <Link href="/#kontakt" className="btn-primary relative overflow-hidden group">
            <span className="relative z-10">Kontaktirajte nas</span>
            <span className="absolute inset-0 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button whileTap={{ scale: 0.9 }} className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white py-4 px-4 shadow-lg"
        >
          <nav className="flex flex-col space-y-4">
            {["Početna", "O nama", "Ponuda vozila", "Uvoz po narudžbi"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Link
                  href={`/#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-gray-700 hover:text-blue-900 font-medium"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Link href="/#kontakt" className="btn-primary inline-block text-center" onClick={toggleMenu}>
                Kontaktirajte nas
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
