'use client'

import SectionHeader from './ui/SectionHeader'
import ServiceCard from './ui/ServiceCard'
import { services } from '@/data/services'

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <SectionHeader
          title="What I Do"
          subtitle="Comprehensive web design and development services"
        />
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
