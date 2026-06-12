'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    category: string[]
    technologies: string[]
    liveUrl: string
    githubUrl: string
  }
  delay?: number
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        <Image 
          src={project.image} 
          alt={project.title}
          width={500}
          height={300}
        />
        <motion.div 
          className="project-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-links">
            <a href={project.liveUrl} className="project-link" title="View Live">
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a href={project.githubUrl} className="project-link" title="View Code">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
