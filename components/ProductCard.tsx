'use client'

import { Heart, Share2, Scale, ShoppingCart } from 'lucide-react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export interface Product {
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
}

export interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: string) => void
  onShare?: (productId: string) => void
  onCompare?: (productId: string) => void
  onLike?: (productId: string) => void
}

const formatPrice = (price: number) => {
  return `Rp ${price.toLocaleString()}`
}

export function ProductCard({
  product,
  onAddToCart,
  onShare,
  onCompare,
  onLike,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
          <Button 
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
            onClick={() => onAddToCart?.(product.name)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to cart
          </Button>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => onShare?.(product.name)}
            >
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => onCompare?.(product.name)}
            >
              <Scale className="h-4 w-4" />
              <span className="sr-only">Compare</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => onLike?.(product.name)}
            >
              <Heart className="h-4 w-4" />
              <span className="sr-only">Like</span>
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-2 space-y-1">
          <div className="text-lg font-bold">{formatPrice(product.price)}</div>
          {product.originalPrice && (
            <div className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

