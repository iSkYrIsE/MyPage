import React, { useEffect, useState } from 'react'
import '../styles/hero.css'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Full-Stack IT Engineer'
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1))
        setTextIndex(textIndex + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [textIndex])

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Marcos Gómez de Quero Santos</span>
          </h1>
          <p className="hero-subtitle">
            {displayText}
            <span className="cursor"></span>
          </p>
          <p className="hero-description">
            Building scalable solutions with modern technologies. Passionate about cloud infrastructure, full-stack development, and solving complex technical challenges.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Download CV</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">⚙️</div>
            <p>DevOps</p>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">☁️</div>
            <p>Cloud</p>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">💻</div>
            <p>Full-Stack</p>
          </div>
          <div className="hero-avatar">
            <div className="avatar-ring"></div>
            <div className="avatar-content">YOU</div>
          </div>
        </div>
      </div>
    </section>
  )
}
