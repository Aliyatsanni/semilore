'use client'

import SectionHeader from './ui/SectionHeader'
import ProgressBar from './ui/ProgressBar'
import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeader
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />
        <div className="skills-content">
          {skills.map((skill, index) => (
            <ProgressBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
