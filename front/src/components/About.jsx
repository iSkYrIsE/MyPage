import { useEffect, useState } from 'react'
import '../styles/about.css'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className={`about ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate IT engineer with expertise in building scalable systems and solving complex technical problems. With a strong foundation in full-stack development, cloud infrastructure, and DevOps practices, I help organizations modernize their technology stack.
            </p>
            <p>
              My journey in tech started with a curiosity about how systems work, which evolved into a career focused on creating efficient, secure, and maintainable solutions. I believe in continuous learning and staying updated with emerging technologies.
            </p>
            <div className="experience-highlights">
              <div className="highlight">
                <span className="number">5+</span>
                <span className="label">Years Experience</span>
              </div>
              <div className="highlight">
                <span className="number">20+</span>
                <span className="label">Projects Completed</span>
              </div>
              <div className="highlight">
                <span className="number">100%</span>
                <span className="label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Performance</h3>
              <p>Optimized systems that scale efficiently</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Security</h3>
              <p>Best practices in security and data protection</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3>Quality</h3>
              <p>Clean code and maintainable architecture</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive</h3>
              <p>Works seamlessly across all devices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
