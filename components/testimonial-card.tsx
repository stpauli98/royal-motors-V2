import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  image: string
  rating: number
  text: string
}

export function TestimonialCard({ name, image, rating, text }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image src="/team1.png" alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold">{name}</h3>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600">{text}</p>
      </CardContent>
    </Card>
  )
}
