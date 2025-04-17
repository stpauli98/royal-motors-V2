"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import VehicleCard from "./vehicle-card"

// Sample vehicle data
const vehicles = [
  {
    id: 1,
    title: "Audi A6 2.0 TDI",
    image: "/vehicles/audi-a6.jpg",
    year: "2018",
    mileage: "120,000 km",
    fuel: "Dizel",
    price: "25,900 €",
    category: "sedan",
  },
  {
    id: 2,
    title: "BMW X5 3.0d xDrive",
    image: "/vehicles/bmw-x5.jpg",
    year: "2019",
    mileage: "85,000 km",
    fuel: "Dizel",
    price: "42,500 €",
    category: "suv",
  },
  {
    id: 3,
    title: "Mercedes-Benz C220d",
    image: "/vehicles/mercedes-c.jpg",
    year: "2020",
    mileage: "65,000 km",
    fuel: "Dizel",
    price: "32,900 €",
    category: "sedan",
  },
  {
    id: 4,
    title: "Volkswagen Golf 8 1.5 TSI",
    image: "/vehicles/vw-golf.jpg",
    year: "2021",
    mileage: "45,000 km",
    fuel: "Benzin",
    price: "22,500 €",
    category: "hatchback",
  },
  {
    id: 5,
    title: "Škoda Octavia 2.0 TDI",
    image: "/vehicles/skoda-octavia.jpg",
    year: "2020",
    mileage: "70,000 km",
    fuel: "Dizel",
    price: "19,900 €",
    category: "hatchback",
  },
  {
    id: 6,
    title: "Toyota RAV4 Hybrid",
    image: "/vehicles/toyota-rav4.jpg",
    year: "2019",
    mileage: "60,000 km",
    fuel: "Hibrid",
    price: "28,500 €",
    category: "suv",
  },
]

export default function VehiclesSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const filteredVehicles =
    activeCategory === "all" ? vehicles : vehicles.filter((vehicle) => vehicle.category === activeCategory)

  return (
    <section id="ponuda-vozila" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-100 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gray-100 to-transparent"></div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={isInView ? { opacity: 0.3, x: 0 } : { opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        className="absolute -left-20 top-1/4 w-40 h-40 bg-blue-900/10 rounded-full blur-xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={isInView ? { opacity: 0.3, x: 0 } : { opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        className="absolute -right-20 bottom-1/4 w-60 h-60 bg-yellow-500/10 rounded-full blur-xl"
      ></motion.div>

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
            Ponuda vozila
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Istražite našu trenutnu ponudu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Pogledajte našu pažljivo odabranu kolekciju kvalitetnih polovnih automobila. Svako vozilo prolazi detaljnu
            inspekciju pre nego što uđe u našu ponudu.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-gray-100 rounded-lg p-1 relative overflow-hidden">
            {["all", "sedan", "suv", "hatchback"].map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-md relative z-10 ${
                  activeCategory === category ? "text-white" : "text-gray-700"
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-blue-900 rounded-md"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {category === "all"
                    ? "Svi modeli"
                    : category === "sedan"
                      ? "Sedan"
                      : category === "suv"
                        ? "SUV"
                        : "Hatchback"}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Vehicles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/vehicles"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center relative overflow-hidden group"
          >
            <span className="relative z-10">Pogledajte sve automobile</span>
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="ml-2 relative z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.span>
            <motion.span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
