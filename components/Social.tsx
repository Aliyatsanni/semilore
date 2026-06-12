'use client'

import SectionHeader from './ui/SectionHeader'
import SocialCard from './ui/SocialCard'
import { socialLinks } from '@/data/social'

export default function Social() {
  return (
    <section className="social-media" aria-labelledby="connect-title">
      <div className="container">
        <SectionHeader
          title="Connect with Me"
          subtitle="Follow for updates, design tips, and project highlights"
        />
        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <SocialCard
              key={social.platform}
              {...social}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
