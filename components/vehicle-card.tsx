"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Gauge, Droplet } from "lucide-react"
import { motion } from "framer-motion"

interface VehicleProps {
  vehicle: {
    id: number
    title: string
    image: string
    year: string
    mileage: string
    fuel: string
    price: string
    category: string
  }
}

export default function VehicleCard({ vehicle }: VehicleProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl relative group"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="w-full h-full">
          <Image src="/car-transport.png" alt={vehicle.title} fill className="object-cover" />
        </motion.div>

        {/* Price tag */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full font-bold shadow-lg"
        >
          {vehicle.price}
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center p-4"
        >
          <Link
            href={`/vehicles/${vehicle.id}`}
            className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium transform transition-transform duration-300 hover:scale-105"
          >
            Pogledaj detalje
          </Link>
        </motion.div>
      </div>

      <div className="p-6 relative">
        {/* Decorative element */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "30%" }}
          className="absolute top-0 left-0 h-1 bg-yellow-500"
        ></motion.div>

        <h3 className="text-xl font-bold mb-2">{vehicle.title}</h3>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <motion.div whileHover={{ y: -3 }} className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="text-sm">{vehicle.year}</span>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className="flex items-center text-gray-600">
            <Gauge className="h-4 w-4 mr-1" />
            <span className="text-sm">{vehicle.mileage}</span>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className="flex items-center text-gray-600">
            <Droplet className="h-4 w-4 mr-1" />
            <span className="text-sm">{vehicle.fuel}</span>
          </motion.div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-900 group-hover:text-yellow-500 transition-colors duration-300">
            {vehicle.price}
          </span>
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link
              href={`/vehicles/${vehicle.id}`}
              className="text-blue-900 hover:text-yellow-500 font-medium transition-colors duration-300"
            >
              Detalji
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
