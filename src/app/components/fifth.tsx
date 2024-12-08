'use client'

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react' // lucide-react icons
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface RoomImage {
  src: string
  alt: string
  category: string
  title: string
}

const rooms: RoomImage[] = [
  {
    src: "/for1.png",
    alt: "Bedroom with minimal design",
    category: "Bed Room",
    title: "Inner Peace"
  },
  {
    src: "/for1.png",
    alt: "Modern living room",
    category: "Living Room",
    title: "Modern Comfort"
  },
  {
    src: "/for1.png",
    alt: "Minimalist dining room",
    category: "Dining Room",
    title: "Elegant Dining"
  },
  {
    src: "/for1.png",
    alt: "Cozy bedroom setup",
    category: "Bed Room",
    title: "Cozy Dreams"
  }
]

export function RoomInspiration() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  return (
    <section className="bg-[#FCF8F3] px-4 py-16 lg:px-20">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:max-w-md">
          <h1 className="text-2xl font-bold">
            50+ Beautiful Rooms
            <br />
            Inspirations
          </h1>
          <p className="mt-4 text-gray-600">
            Our designer already made a lot of beautiful
            <br />
            prototype of rooms that inspire you
          </p>
          <Button className="mt-6 bg-[#B88E2F] text-white hover:bg-[#9c7829]">
            Explore More
          </Button>
        </div>

        <div className="w-full lg:flex-1">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-6">
                {rooms.map((room, index) => (
                  <div key={index} className="flex-[0_0_372px]">
                    <Card className="relative overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={room.src}
                          alt={room.alt}
                          width={372}
                          height={486}
                          className="object-cover"
                        />
                        {selectedIndex === index && (
                          <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-600">{room.category}</p>
                                <h3 className="text-lg font-semibold">{room.title}</h3>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full bg-[#B88E2F] text-white hover:bg-[#9c7829]"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute -left-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white shadow-lg"
              onClick={() => setSelectedIndex((prev) => (prev - 1 + rooms.length) % rooms.length)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white shadow-lg"
              onClick={() => setSelectedIndex((prev) => (prev + 1) % rooms.length)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
