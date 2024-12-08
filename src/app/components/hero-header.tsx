import Image from "next/image"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbItem {
  href: string
  label: string
}

interface HeroHeaderProps {
  title: string
  breadcrumbItems: BreadcrumbItem[]
  backgroundImage: string
  className?: string
}

export function HeroHeader({
  title,
  breadcrumbItems,
  backgroundImage,
  className = "",
}: HeroHeaderProps) {
  return (
    <div className={`relative h-[200px] md:h-[300px] overflow-hidden ${className}`}>
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <BreadcrumbItem key={item.href}>
                {index > 0 && <BreadcrumbSeparator className="text-white opacity-50" />}
                <BreadcrumbLink href={item.href} className="text-white hover:text-white/80">
                  {item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}

