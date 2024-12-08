'use client'

import { Grid2X2, List, SlidersHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { HeroSection } from "./hero-section"

interface ShopHeaderProps {
  title: string
  breadcrumbItems: Array<{ href: string; label: string }>
  totalResults: number
  currentPage: number
  resultsPerPage: number
  onViewChange: (view: 'grid' | 'list') => void
  onResultsPerPageChange: (count: number) => void
  onSortChange: (sort: string) => void
  currentView: 'grid' | 'list'
  showOptions?: Array<number>
  sortOptions?: Array<{ value: string; label: string }>
  className?: string
}

export function ShopHeader({
  title,
  breadcrumbItems,
  totalResults,
  currentPage,
  resultsPerPage,
  onViewChange,
  onResultsPerPageChange,
  onSortChange,
  currentView,
  showOptions = [12, 16, 24, 36],
  sortOptions = [
    { value: "default", label: "Default" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" },
  ],
  className = "",
}: ShopHeaderProps) {
  const startResult = (currentPage - 1) * resultsPerPage + 1
  const endResult = Math.min(currentPage * resultsPerPage, totalResults)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection title={title} breadcrumbItems={breadcrumbItems} className={className} />

      {/* Filter Bar */}
      <div className="px-4 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-neutral-50">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="whitespace-nowrap">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <div className="flex items-center gap-2 ml-2">
            <Button
              variant={currentView === 'grid' ? 'default' : 'ghost'}
              size="icon"
              className="h-8 w-8"
              onClick={() => onViewChange('grid')}
            >
              <Grid2X2 className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </Button>
            <Button
              variant={currentView === 'list' ? 'default' : 'ghost'}
              size="icon"
              className="h-8 w-8"
              onClick={() => onViewChange('list')}
            >
              <List className="h-4 w-4" />
              <span className="sr-only">List view</span>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground hidden md:block">
            Showing {startResult}-{endResult} of {totalResults} results
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm whitespace-nowrap">Show:</span>
            <Select
              defaultValue={String(resultsPerPage)}
              onValueChange={(value) => onResultsPerPageChange(Number(value))}
            >
              <SelectTrigger className="w-[70px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {showOptions.map((option) => (
                  <SelectItem key={option} value={String(option)}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm whitespace-nowrap">Sort by:</span>
            <Select
              defaultValue="default"
              onValueChange={onSortChange}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

