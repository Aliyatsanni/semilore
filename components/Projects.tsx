'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import FilterButtons from './ui/FilterButtons'
import ProjectCard from './ui/ProjectCard'
import { projects, projectFilters, Project } from '@/data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter))

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          subtitle="A showcase of my recent work and creative solutions"
        />

        <FilterButtons
          filters={projectFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <motion.div
          className="project-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 0.1}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
