'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import styles from './VideoIntro.module.css'

gsap.registerPlugin(ScrollToPlugin)

export default function VideoIntro() {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showSoundHint, setShowSoundHint] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.5,
        delay: 0.5,
        ease: 'power3.out'
      })
    })

    const timer = setTimeout(() => setShowSoundHint(false), 4000)

    // Auto scroll when video ends
    const handleVideoEnd = () => {
      // Wait 0.5 seconds after video ends, then scroll
      setTimeout(() => {
        gsap.to(window, {
          scrollTo: '#about',
          duration: 1.5,
          ease: 'power2.inOut'
        })
      }, 500)
    }

    const video = videoRef.current
    if (video) {
      video.addEventListener('ended', handleVideoEnd)
    }

    return () => {
      ctx.revert()
      clearTimeout(timer)
      if (video) {
        video.removeEventListener('ended', handleVideoEnd)
      }
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const scrollToNext = () => {
    gsap.to(window, {
      scrollTo: '#about',
      duration: 1.5,
      ease: 'power2.inOut'
    })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.mainVideo}
          autoPlay
          muted
          playsInline
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
      </div>

      <div ref={contentRef} className={styles.content}>
        <h1 className={styles.name}>DRUMINAA</h1>
        <p className={styles.subtitle}>
          Full Stack Engineer • AI Systems • System Design
        </p>
      </div>

      <div className={styles.controls}>
        <button onClick={togglePlay} className={styles.controlBtn} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>
        <button onClick={toggleMute} className={styles.controlBtn} aria-label={isMuted ? 'Unmute' : 'Mute'}>
          {isMuted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      </div>

      {showSoundHint && (
        <div className={styles.soundHint}>
          <span className={styles.pulse} />
          Tap for sound
        </div>
      )}

      <button onClick={scrollToNext} className={styles.scrollIndicator} aria-label="Scroll down">
        <div className={styles.scrollLine} />
      </button>
    </section>
  )
}
