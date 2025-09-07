'use client'

export default function Services() {
  const services = [
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

  return (
    <section id="services" className="services" data-aos="fade-up">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">Comprehensive web design and development services</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="service-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
