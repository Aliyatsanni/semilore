'use client'

import { motion } from 'framer-motion'

interface FilterOption {
  key: string
  label: string
}

interface FilterButtonsProps {
  filters: FilterOption[]
  activeFilter: string
  onFilterChange: (key: string) => void
}

export default function FilterButtons({ filters, activeFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className="project-filter">
      {filters.map((filter) => (
        <motion.button
          key={filter.key}
          className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.key)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  )
}
