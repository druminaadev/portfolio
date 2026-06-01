'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Projects.module.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Real-time data analytics platform with ML-driven insights and predictive modeling.',
    tech: ['React', 'Python', 'TensorFlow', 'AWS'],
    link: '#'
  },
  {
    title: 'E-Commerce Microservices',
    description: 'Scalable microservices architecture handling 1M+ daily transactions.',
    tech: ['Node.js', 'Kubernetes', 'PostgreSQL', 'Redis'],
    link: '#'
  },
  {
    title: 'Real-Time Collaboration Tool',
    description: 'WebSocket-based collaboration platform with live editing and video conferencing.',
    tech: ['Next.js', 'WebRTC', 'Socket.io', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Computer Vision Pipeline',
    description: 'High-performance image processing pipeline for object detection and classification.',
    tech: ['PyTorch', 'FastAPI', 'Docker', 'GCP'],
    link: '#'
  }
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.card} project-card`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tech}>
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <a href={project.link} className={styles.link}>
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
