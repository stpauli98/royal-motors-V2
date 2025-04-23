"use server";
import { neon } from "@neondatabase/serverless";
import type { Vehicle } from "@/components/vehicles-section";

export async function fetchVehicles(): Promise<Vehicle[]> {
  const sql = neon(process.env.DATABASE_URL!);
  const vehicles = await sql`SELECT * FROM cars`;
  return vehicles as Vehicle[];
}