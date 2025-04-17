"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Marko Petrović",
    image: "/testimonials/person1.jpg",
    rating: 5,
    text: "Izuzetno profesionalna usluga. Uvezli su mi BMW X5 tačno prema mojim specifikacijama i u dogovorenom roku. Sve je bilo transparentno od početka do kraja.",
  },
  {
    id: 2,
    name: "Ana Jovanović",
    image: "/testimonials/person2.jpg",
    rating: 5,
    text: "Kupila sam Audi A4 i prezadovoljna sam. Auto je u odličnom stanju, baš kao što je i opisano. Preporučujem Royal Motors svima koji traže kvalitetan polovni automobil.",
  },
  {
    id: 3,
    name: "Nikola Đorđević",
    image: "/testimonials/person3.jpg",
    rating: 4,
    text: "Brza i efikasna usluga. Pomogali su mi oko izbora automobila koji odgovara mojim potrebama i budžetu. Ceo proces je bio jednostavan i bez stresa.",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 animated-gradient"></div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 0.3, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="absolute -bottom-20 left-1/4 w-80 h-80 bg-blue-900/10 rounded-full blur-xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 0.3, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="absolute -top-40 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-xl"
      ></motion.div>

      {/* Floating quotes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-10 top-20 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 11H6C5.44772 11 5 10.5523 5 10V6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11Z"
              stroke="#1F2937"
              strokeWidth="2"
            />
            <path
              d="M18 11H14C13.4477 11 13 10.5523 13 10V6C13 5.44772 13.4477 5 14 5H18C18.5523 5 19 5.44772 19 6V10C19 10.5523 18.5523 11 18 11Z"
              stroke="#1F2937"
              strokeWidth="2"
            />
            <path
              d="M10 19H6C5.44772 19 5 18.5523 5 18V14C5 13.4477 5.44772 13 6 13H10C10.5523 13 11 13.4477 11 14V18C11 18.5523 10.5523 19 10 19Z"
              stroke="#1F2937"
              strokeWidth="2"
            />
            <path
              d="M18 19H14C13.4477 19 13 18.5523 13 18V14C13 13.4477 13.4477 13 14 13H18C18.5523 13 19 13.4477 19 14V18C19 18.5523 18.5523 19 18 19Z"
              stroke="#1F2937"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute right-20 bottom-40 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7C20 5.89543 19.1046 5 18 5H16M8 5V3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V5M8 5H16"
              stroke="#F59E0B"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4"
          >
            Iskustva klijenata
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Šta kažu naši klijenti
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Pročitajte iskustva naših zadovoljnih klijenata koji su nam ukazali poverenje.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 * index + 0.5 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white p-6 rounded-lg shadow-lg relative z-10 overflow-hidden"
            >
              {/* Decorative corner */}
              <motion.div
                initial={{ width: 0, height: 0 }}
                animate={isInView ? { width: 40, height: 40 } : { width: 0, height: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="absolute top-0 right-0 border-t-2 border-r-2 border-yellow-500 z-0"
              ></motion.div>

              {/* Quote icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="absolute -right-4 -bottom-4 text-6xl text-blue-900 opacity-10"
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9999 14.1094L17.5921 8.51719C17.9826 8.12669 18.6158 8.12669 19.0063 8.51719C19.3968 8.90769 19.3968 9.54086 19.0063 9.93136L12.7071 16.2306C12.3166 16.6211 11.6834 16.6211 11.2929 16.2306L4.99371 9.93136C4.60322 9.54086 4.60322 8.90769 4.99371 8.51719C5.38421 8.12669 6.01738 8.12669 6.40787 8.51719L11.9999 14.1094Z" />
                </svg>
              </motion.div>

              <div className="flex items-center mb-4 relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="relative w-12 h-12 rounded-full overflow-hidden mr-4"
                >
                  <Image
                    src="/team1.png"
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div>
                  <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="font-bold"
                  >
                    {testimonial.name}
                  </motion.h4>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + i * 0.1 }}
                      >
                        <Star
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-gray-600 italic relative z-10"
              >
                {testimonial.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
