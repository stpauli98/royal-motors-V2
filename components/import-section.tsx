"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ImportSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carMake: "",
    carModel: "",
    budget: "",
    additionalInfo: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        phone: "",
        carMake: "",
        carModel: "",
        budget: "",
        additionalInfo: "",
      })
    }, 1500)
  }

  return (
    <section id="uvoz-po-narudžbi" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gray-50 z-0"></div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className="absolute -right-20 top-20 w-80 h-80 bg-blue-900/10 rounded-full blur-xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -left-40 bottom-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-xl"
      ></motion.div>

      {/* Floating car parts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute right-10 top-1/4 w-20 h-20 pointer-events-none"
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
          <Image src="/car-transport.png" alt="Test image" width={80} height={80} className="opacity-20" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute left-20 bottom-1/4 w-24 h-24 pointer-events-none"
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
          <Image src="/car-transport.png" alt="Test image" width={100} height={100} className="opacity-20" />
        </motion.div>
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium mb-4"
            >
              Uvoz po narudžbi
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              Ne možete pronaći željeni automobil?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-600 mb-8"
            >
              Prepustite nama da pronađemo vaš savršeni automobil. Naš tim stručnjaka će pretražiti tržište i pronaći
              vozilo koje odgovara vašim željama i budžetu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              {[
                { title: "Široka mreža kontakata", desc: "Imamo pristup širokoj mreži pouzdanih dobavljača u Evropi." },
                { title: "Detaljna provera", desc: "Svako vozilo prolazi detaljnu proveru pre kupovine." },
                { title: "Kompletna dokumentacija", desc: "Brinemo o svim papirima i carinjenju vozila." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-900" />
                    </div>
                  </motion.div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative h-48 lg:h-64 rounded-lg overflow-hidden shadow-lg"
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                <Image src="/car-transport.png" alt="Test image" fill className="object-cover" />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-0 left-0 h-1 bg-yellow-500"
              ></motion.div>

              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute top-0 right-0 w-1 bg-blue-900"
              ></motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg relative"
          >
            {/* Decorative corner elements */}
            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={isInView ? { width: 30, height: 30 } : { width: 0, height: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-0 left-0 border-t-2 border-l-2 border-blue-900"
            ></motion.div>

            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={isInView ? { width: 30, height: 30 } : { width: 0, height: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute top-0 right-0 border-t-2 border-r-2 border-blue-900"
            ></motion.div>

            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={isInView ? { width: 30, height: 30 } : { width: 0, height: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute bottom-0 left-0 border-b-2 border-l-2 border-blue-900"
            ></motion.div>

            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={isInView ? { width: 30, height: 30 } : { width: 0, height: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute bottom-0 right-0 border-b-2 border-r-2 border-blue-900"
            ></motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-bold mb-6"
            >
              Pošaljite upit za uvoz
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
                  Upit uspešno poslat!
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-600"
                >
                  Hvala vam na upitu. Naš tim će vas kontaktirati u najkraćem mogućem roku da razgovaramo o vašim
                  željama.
                </motion.p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
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
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900 transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label htmlFor="carMake" className="block text-sm font-medium text-gray-700 mb-1">
                      Marka vozila
                    </label>
                    <select
                      id="carMake"
                      name="carMake"
                      value={formData.carMake}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900 transition-all duration-300"
                      required
                    >
                      <option value="">Izaberite marku</option>
                      <option value="Audi">Audi</option>
                      <option value="BMW">BMW</option>
                      <option value="Mercedes">Mercedes-Benz</option>
                      <option value="Volkswagen">Volkswagen</option>
                      <option value="Škoda">Škoda</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Drugo">Drugo</option>
                    </select>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-1">
                      Model
                    </label>
                    <input
                      type="text"
                      id="carModel"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900 transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Budžet (€)
                  </label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900 transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                    Dodatni zahtevi
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900 transition-all duration-300"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="w-full btn-primary py-3 relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">{isSubmitting ? "Slanje..." : "Pošalji upit"}</span>
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
        </motion.div>
      </div>
    </section>
  )
}
