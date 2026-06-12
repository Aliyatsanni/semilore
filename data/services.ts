export interface Service {
  icon: string
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    icon: 'fas fa-palette',
    title: 'Web Design',
    description: 'Creating visually stunning and user-friendly interfaces that engage your audience and reflect your brand identity.',
    features: ['UI/UX Design', 'Responsive Design', 'Brand Integration', 'Wireframing']
  },
  {
    icon: 'fas fa-code',
    title: 'Frontend Development',
    description: 'Building fast, responsive, and interactive websites using modern technologies and best practices.',
    features: ['HTML5 & CSS3', 'JavaScript & React', 'Performance Optimization', 'Cross-browser Compatibility']
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Responsive Design',
    description: 'Ensuring your website looks and works perfectly on all devices, from mobile phones to desktop computers.',
    features: ['Mobile-First Approach', 'Flexible Grid Systems', 'Touch-Friendly Interface', 'Performance Optimization']
  },
  {
    icon: 'fas fa-tools',
    title: 'Website Maintenance',
    description: 'Keeping your website updated, secure, and performing at its best with regular maintenance and support.',
    features: ['Regular Updates', 'Security Monitoring', 'Performance Optimization', 'Content Management']
  }
]
