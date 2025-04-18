"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
          className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-blue-900/10 blur-3xl"
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
          className="absolute bottom-[30%] left-[15%] w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl"
        />
      </div>

      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
                <Image src="/favicon.ico" alt="Royal Motors Logo" width={40} height={40} />
              </motion.div>
              <span className="text-xl font-bold">Royal Motors</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Royal Motors je vaš pouzdan partner za kupovinu kvalitetnih polovnih automobila i uvoz vozila iz
              inostranstva.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: <Facebook className="w-5 h-5" />,
                  bg: "bg-blue-800 hover:bg-blue-700",
                  url: "https://facebook.com",
                },
                {
                  icon: <Instagram className="w-5 h-5" />,
                  bg: "bg-pink-600 hover:bg-pink-500",
                  url: "https://instagram.com",
                },
                {
                  icon: <Twitter className="w-5 h-5" />,
                  bg: "bg-blue-400 hover:bg-blue-300",
                  url: "https://twitter.com",
                },
                {
                  icon: <Youtube className="w-5 h-5" />,
                  bg: "bg-red-600 hover:bg-red-500",
                  url: "https://youtube.com",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.8 }}
                  className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center transition-colors`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6">Brzi linkovi</h3>
            <ul className="space-y-3">
              {["Početna", "O nama", "Ponuda vozila", "Uvoz po narudžbi", "Kontakt"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 1 }}
                >
                  <Link
                    href={`/#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-gray-400 hover:text-white transition-colors relative group"
                  >
                    <span>{item}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-6">Kontakt</h3>
            <ul className="space-y-3">
              {[
                { emoji: "📍", text: "Autoput 20, 11000 Beograd, Srbija" },
                { emoji: "📞", text: "+381 11 123 4567" },
                { emoji: "✉️", text: "info@royalmotors.rs" },
                { emoji: "🕒", text: "Pon-Pet: 09:00 - 19:00" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 1.2 }}
                  className="flex items-start"
                >
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 mr-3"
                  >
                    {item.emoji}
                  </motion.span>
                  <span className="text-gray-400">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Prijavite se na naš newsletter i budite prvi koji će saznati o novim vozilima u ponudi i specijalnim
              akcijama.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                type="email"
                placeholder="Vaša email adresa"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">Prijavi se</span>
                <motion.span
                  initial={{ left: "-100%" }}
                  whileHover={{ left: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-yellow-500 transform group-hover:translate-x-0 -z-0"
                ></motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">© {new Date().getFullYear()} Royal Motors. Sva prava zadržana.</p>
        </motion.div>
      </div>
    </footer>
  )
}
