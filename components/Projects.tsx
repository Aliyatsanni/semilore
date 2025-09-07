'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing creative design and smooth animations. Built with HTML5, CSS3, and JavaScript.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      category: ['web-design', 'development'],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'AOS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'E-commerce Landing Page',
      description: 'A conversion-focused landing page for an e-commerce startup with modern UI principles and responsive design.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop',
      category: ['web-design', 'ui-ux'],
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Modern Blog Platform',
      description: 'A clean and intuitive blog platform with advanced typography, reading experience optimization, and content management features.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      category: ['development', 'ui-ux'],
      technologies: ['React', 'CSS3', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Corporate Business Website',
      description: 'A professional corporate website with advanced animations, contact forms, and service showcases for a consulting firm.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop',
      category: ['web-design', 'development'],
      technologies: ['HTML5', 'SCSS', 'JavaScript', 'GSAP'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web-design', label: 'Web Design' },
    { key: 'development', label: 'Development' },
    { key: 'ui-ux', label: 'UI/UX' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter))

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and creative solutions</p>
        </div>
        
        <div className="project-filter">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="project-image">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={500}
                  height={300}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" title="View Live">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.githubUrl} className="project-link" title="View Code">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
