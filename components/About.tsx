'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './About.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={`${styles.title} about-content`}>About Me</h2>
        <div className={`${styles.content} about-content`}>
          <p className={styles.bio}>
            I'm a Full Stack Engineer specializing in building scalable AI systems and robust architectures. 
            With expertise in modern web technologies and system design, I create innovative solutions that 
            bridge the gap between complex backend systems and intuitive user experiences.
          </p>
        </div>
        
        <div className={styles.skills}>
          <div className={`${styles.skillCategory} about-content`}>
            <h3>Frontend</h3>
            <div className={styles.skillTags}>
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Three.js</span>
              <span>GSAP</span>
            </div>
          </div>
          
          <div className={`${styles.skillCategory} about-content`}>
            <h3>Backend</h3>
            <div className={styles.skillTags}>
              <span>Node.js</span>
              <span>Python</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Redis</span>
            </div>
          </div>
          
          <div className={`${styles.skillCategory} about-content`}>
            <h3>AI & Cloud</h3>
            <div className={styles.skillTags}>
              <span>TensorFlow</span>
              <span>PyTorch</span>
              <span>AWS</span>
              <span>Docker</span>
              <span>Kubernetes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
