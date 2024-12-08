import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import React from "react"

interface BreadcrumbItem {
  href: string
  label: string
}

interface HeroSectionProps {
  title: string
  breadcrumbItems: BreadcrumbItem[]
  className?: string
}

export function HeroSection({ title, breadcrumbItems, className = "" }: HeroSectionProps) {
  return (
    <div className={`relative h-[200px] md:h-[300px] bg-neutral-100 ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={item.href}>
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}

