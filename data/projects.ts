export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string[]
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

export const projects: Project[] = [
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

export interface FilterOption {
  key: string
  label: string
}

export const projectFilters: FilterOption[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'web-design', label: 'Web Design' },
  { key: 'development', label: 'Development' },
  { key: 'ui-ux', label: 'UI/UX' }
]
