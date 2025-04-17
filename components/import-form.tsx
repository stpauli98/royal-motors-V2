"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ImportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-green-600"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Upit uspešno poslat!</h3>
        <p className="text-gray-600">
          Hvala vam na upitu. Naš tim će vas kontaktirati u najkraćem mogućem roku da razgovaramo o vašim željama.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="import-name">Ime</Label>
          <Input id="import-name" placeholder="Unesite vaše ime" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="import-phone">Telefon</Label>
          <Input id="import-phone" placeholder="Unesite vaš broj telefona" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="import-email">Email</Label>
        <Input id="import-email" type="email" placeholder="Unesite vašu email adresu" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="import-make">Marka vozila</Label>
        <Select>
          <SelectTrigger id="import-make">
            <SelectValue placeholder="Izaberite marku" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="audi">Audi</SelectItem>
            <SelectItem value="bmw">BMW</SelectItem>
            <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
            <SelectItem value="volkswagen">Volkswagen</SelectItem>
            <SelectItem value="skoda">Škoda</SelectItem>
            <SelectItem value="toyota">Toyota</SelectItem>
            <SelectItem value="other">Drugo</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="import-model">Model</Label>
        <Input id="import-model" placeholder="Unesite model vozila" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="import-year">Godište</Label>
        <Select>
          <SelectTrigger id="import-year">
            <SelectValue placeholder="Izaberite godište" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 10 }, (_, i) => {
              const year = new Date().getFullYear() - i
              return (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              )
            })}
            <SelectItem value="older">Starije</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="import-budget">Budžet (€)</Label>
        <Input id="import-budget" type="number" placeholder="Unesite vaš budžet" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="import-details">Dodatni zahtevi</Label>
        <Textarea id="import-details" placeholder="Unesite dodatne zahteve ili specifikacije" rows={3} />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Slanje..." : "Pošalji upit"}
      </Button>
    </form>
  )
}
