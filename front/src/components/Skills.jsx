import React, { useEffect, useState } from 'react'
import '../styles/skills.css'

export default function Skills() {
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

    const section = document.getElementById('skills')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'CSS/Tailwind', 'Next.js', 'Vue.js'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'DevOps & Cloud',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    },
    {
      title: 'Tools & Methods',
      skills: ['Git', 'Agile', 'Linux', 'Jenkins', 'Microservices'],
    },
  ]

  return (
    <section id="skills" className={`skills ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="proficiency-section">
          <h3>Proficiency Levels</h3>
          <div className="proficiency-grid">
            {[
              { name: 'Frontend Development', level: 95 },
              { name: 'Backend Development', level: 90 },
              { name: 'Cloud Infrastructure', level: 85 },
              { name: 'DevOps & Deployment', level: 88 },
            ].map((item, idx) => (
              <div key={idx} className="proficiency-item">
                <div className="proficiency-header">
                  <span>{item.name}</span>
                  <span className="level-text">{item.level}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: isVisible ? `${item.level}%` : '0%',
                      animation: isVisible ? `fillWidth 1s ease-out ${idx * 0.1}s forwards` : 'none',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
