"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <section id="kontakt" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gray-50 z-0"></div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className="absolute -left-20 top-20 w-80 h-80 bg-blue-900/10 rounded-full blur-xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -right-40 bottom-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-xl"
      ></motion.div>

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute left-10 top-1/4 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -30, 0],
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
              d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
              stroke="#1F2937"
              strokeWidth="2"
            />
            <path d="M22 6L12 13L2 6" stroke="#1F2937" strokeWidth="2" />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute right-20 top-2/3 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 5.5C3 14.06 9.94 21 18.5 21C19.38 21 20.5 20.88 21 20.5C21.5 20.12 21.5 19.5 21 19C20.5 18.5 19.5 18.5 19 18.5C11.54 18.5 5.5 12.46 5.5 5C5.5 4.5 5.5 3.5 5 3C4.5 2.5 3.88 2.5 3.5 3C3.12 3.5 3 4.62 3 5.5Z"
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
            Kontakt
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Kontaktirajte nas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Imate pitanje ili želite da zakažete pregled vozila? Kontaktirajte nas i naš tim će vam odgovoriti u
            najkraćem mogućem roku.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg mb-8 relative overflow-hidden"
            >
              {/* Decorative corner */}
              <motion.div
                initial={{ width: 0, height: 0 }}
                animate={isInView ? { width: 40, height: 40 } : { width: 0, height: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-0 left-0 border-t-2 border-l-2 border-blue-900"
              ></motion.div>

              <motion.div
                initial={{ width: 0, height: 0 }}
                animate={isInView ? { width: 40, height: 40 } : { width: 0, height: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute bottom-0 right-0 border-b-2 border-r-2 border-blue-900"
              ></motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-xl font-bold mb-6 relative z-10"
              >
                Kontakt informacije
              </motion.h3>

              <div className="space-y-4 relative z-10">
                {[
                  {
                    icon: <MapPin className="w-5 h-5 text-blue-900" />,
                    title: "Adresa",
                    desc: "Autoput 20, 11000 Beograd, Srbija",
                  },
                  { icon: <Phone className="w-5 h-5 text-blue-900" />, title: "Telefon", desc: "+381 11 123 4567" },
                  { icon: <Mail className="w-5 h-5 text-blue-900" />, title: "Email", desc: "info@royalmotors.rs" },
                  {
                    icon: <Clock className="w-5 h-5 text-blue-900" />,
                    title: "Radno vreme",
                    desc: ["Ponedeljak - Petak: 09:00 - 19:00", "Subota: 09:00 - 15:00", "Nedelja: Zatvoreno"],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </motion.div>
                    <div className="ml-4">
                      <h4 className="font-semibold">{item.title}</h4>
                      {Array.isArray(item.desc) ? (
                        item.desc.map((line, i) => (
                          <p key={i} className="text-gray-600">
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-600">{item.desc}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative h-[300px] rounded-lg overflow-hidden shadow-lg"
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="w-full h-full">
                <iframe
  src="https://www.google.com/maps?q=44.7866,20.4489&z=15&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
              </motion.div>

              {/* Map pin animation */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <motion.div
                    animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute -inset-2 rounded-full border-2 border-blue-900"
                  ></motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white p-8 rounded-lg shadow-lg relative"
          >
            {/* Decorative corner elements */}
            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={isInView ? { width: 40, height: 40 } : { width: 0, height: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-0 left-0 border-t-2 border-l-2 border-blue-900"
            ></motion.div>

            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={isInView ? { width: 40, height: 40 } : { width: 0, height: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute top-0 right-0 border-t-2 border-r-2 border-blue-900"
            ></motion.div>

            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={isInView ? { width: 40, height: 40 } : { width: 0, height: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute bottom-0 left-0 border-b-2 border-l-2 border-blue-900"
            ></motion.div>

            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={isInView ? { width: 40, height: 40 } : { width: 0, height: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute bottom-0 right-0 border-b-2 border-r-2 border-blue-900"
            ></motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-xl font-bold mb-6 relative z-10"
            >
              Pošaljite nam poruku
            </motion.h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-8 h-8 text-green-600" />
                </motion.div>
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl font-bold mb-2"
                >
                  Poruka uspešno poslata!
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-600"
                >
                  Hvala vam na poruci. Naš tim će vas kontaktirati u najkraćem mogućem roku.
                </motion.p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900 transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email adresa
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900 transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Naslov
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900 transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900 transition-all duration-300"
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="w-full btn-primary py-3 relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">{isSubmitting ? "Slanje..." : "Pošalji poruku"}</span>
                  <motion.span
                    initial={{ left: "-100%" }}
                    whileHover={{ left: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-yellow-500 transform group-hover:translate-x-0 -z-0"
                  ></motion.span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
