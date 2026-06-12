'use client'

import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import FadeIn from './animations/FadeIn'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeader title="About Me" />
        <FadeIn delay={0.2}>
          <div className="about-content">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi, I'm Sanni Aliyat Semilore
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm a passionate Web Designer & Developer with a focus on crafting clean, responsive, and user-friendly
              interfaces using modern technologies. I love bringing ideas to life in the browser and continually
              strive to improve my skills while building meaningful web experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              My goal is to deliver visually appealing and functional websites that not only look great but also
              perform well across all devices. Whether it's a personal blog, e-commerce platform, or business website,
              I approach every project with dedication, professionalism, and creativity.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I specialize in modern web technologies including React, Next.js, TypeScript, and responsive design principles.
              My passion lies in creating digital experiences that are both beautiful and functional, always keeping the
              user experience at the forefront of every design decision.
            </motion.p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
