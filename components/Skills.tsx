'use client'

export default function Skills() {
  const skills = [
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS3', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 80 },
    { name: 'Next.js', percentage: 75 },
    { name: 'TypeScript', percentage: 70 },
    { name: 'Bootstrap', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 80 }
  ]

  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        <div className="skills-content">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress-bar">
                <div style={{ width: `${skill.percentage}%` }}></div>
              </div>
              <div className="skill-percentage">{skill.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
