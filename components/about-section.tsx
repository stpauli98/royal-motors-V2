"use client"

import Image from "next/image"
import { Shield, Users, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="o-nama" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 animated-gradient"></div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: isInView ? 0.5 : 0, rotate: 360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute -right-32 -top-32 w-96 h-96 border border-blue-900/10 rounded-full"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: isInView ? 0.5 : 0, rotate: -360 }}
        transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute -right-48 -top-48 w-[500px] h-[500px] border border-yellow-500/10 rounded-full"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: isInView ? 0.5 : 0, rotate: 360 }}
        transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute -left-32 -bottom-32 w-96 h-96 border border-blue-900/10 rounded-full"
      ></motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4"
            >
              O nama
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              Vaš pouzdan partner za kupovinu automobila
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-600 mb-6"
            >
              Royal Motors je kompanija sa dugogodišnjim iskustvom u prodaji polovnih automobila i uvozu vozila iz
              inostranstva. Naš tim stručnjaka pažljivo bira svako vozilo, osiguravajući da našim klijentima nudimo samo
              najbolje.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 mb-8"
            >
              Fokusirani smo na kvalitet, transparentnost i profesionalnu uslugu. Verujemo da kupovina automobila treba
              biti jednostavno i prijatno iskustvo, bez skrivenih troškova i neprijatnih iznenađenja.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <Shield className="w-6 h-6 text-blue-900" />,
                  title: "Pouzdanost",
                  desc: "Garantujemo kvalitet svakog vozila",
                },
                {
                  icon: <Users className="w-6 h-6 text-blue-900" />,
                  title: "Stručnost",
                  desc: "Tim sa dugogodišnjim iskustvom",
                },
                {
                  icon: <Award className="w-6 h-6 text-blue-900" />,
                  title: "Kvalitet",
                  desc: "Samo proverena i kvalitetna vozila",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ rotate: [0, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3"
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl z-10"
            >
              <Image src="/team1.png" alt="Test image" fill className="object-cover" />
            </motion.div>

            {/* Decorative elements around the image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500/10 rounded-full z-0"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -top-10 -right-10 w-60 h-60 bg-blue-900/10 rounded-full z-0"
            ></motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 -right-5 w-20 h-20 bg-blue-900/20 rounded-full blur-xl z-0"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
