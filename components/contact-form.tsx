"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function ContactForm() {
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
        <h3 className="text-xl font-bold mb-2">Poruka uspešno poslata!</h3>
        <p className="text-gray-600">Hvala vam na poruci. Naš tim će vas kontaktirati u najkraćem mogućem roku.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">Ime</Label>
          <Input id="first-name" placeholder="Unesite vaše ime" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Prezime</Label>
          <Input id="last-name" placeholder="Unesite vaše prezime" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Unesite vašu email adresu" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefon</Label>
        <Input id="phone" placeholder="Unesite vaš broj telefona" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Naslov</Label>
        <Input id="subject" placeholder="Unesite naslov poruke" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Poruka</Label>
        <Textarea id="message" placeholder="Unesite vašu poruku" rows={5} required />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Slanje..." : "Pošalji poruku"}
      </Button>
    </form>
  )
}
