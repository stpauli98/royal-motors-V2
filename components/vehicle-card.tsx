"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Gauge, Droplet, Settings } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VehicleProps {
  vehicle: {
    id: number;
    brand: string;
    model: string;
    year: number;
    price: number;
    discount: number;
    discount_type: string;
    mileage: number;
    fuel: string;
    transmission: string;
    power: number;
    color: string;
    description: string;
    status: string;
    images: string[];
    views: number;
    created_at: string;
    category: string;
};
}


export default function VehicleCard({ vehicle }: VehicleProps) {
  const images = typeof vehicle.images === "string" ? JSON.parse(vehicle.images) : vehicle.images;
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <motion.div
        className="relative h-48 w-full overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={images[0]}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-semibold shadow">
          {vehicle.status || "Used"}
        </div>
        <div className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full font-bold shadow">
          {vehicle.price} BAM
        </div>
      </motion.div>

      <CardHeader className="p-4 pt-6">
        <h3 className="text-2xl font-extrabold text-gray-800 group-hover:text-blue-900">
          {vehicle.brand} {vehicle.model}
        </h3>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-sm text-gray-700">Godina: {vehicle.year}</span>
          </div>
          <div className="flex items-center">
            <Gauge className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-sm text-gray-700">Kilometraža: {vehicle.mileage}</span>
          </div>
          <div className="flex items-center">
            <Droplet className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-sm text-gray-700">Gorivo: {vehicle.fuel}</span>
          </div>
          {vehicle.transmission && (
            <div className="flex items-center">
              <Settings className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-sm text-gray-700">Mjenjač: {vehicle.transmission}</span>
            </div>
          )}
          {vehicle.power && (
            <div className="flex items-center">
              <Droplet className="h-5 w-5 text-gray-500 mr-2 rotate-45" />
              <span className="text-sm text-gray-700">KS: {vehicle.power}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-2 flex justify-end">
        <motion.div
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link href={`/vehicles/${vehicle.id}`} passHref>
            <Button variant="custom">
              Detaljnije
            </Button>
          </Link>
        </motion.div>
      </CardFooter>
    </Card>
  );
}
