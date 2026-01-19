import { useEffect, useState } from 'react'
import '../styles/projects.css'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedTag, setSelectedTag] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('projects')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management and payment integration.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.pexels.com/photos/3588365/pexels-photo-3588365.jpeg?w=500&h=300&fit=crop',
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Designed and deployed scalable AWS infrastructure with Docker and Kubernetes orchestration.',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=500&h=300&fit=crop',
    },
    {
      title: 'Real-time Monitoring Dashboard',
      description: 'Interactive dashboard for system monitoring with real-time data visualization and alerts.',
      tags: ['React', 'WebSocket', 'Python', 'Time-series DB'],
      image: 'https://images.pexels.com/photos/3944387/pexels-photo-3944387.jpeg?w=500&h=300&fit=crop',
    },
    {
      title: 'Mobile App Backend API',
      description: 'RESTful API for mobile applications with authentication, rate limiting, and optimization.',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?w=500&h=300&fit=crop',
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Automated deployment pipeline reducing release time by 70% with comprehensive testing.',
      tags: ['Jenkins', 'Git', 'Docker', 'DevOps'],
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?w=500&h=300&fit=crop',
    },
    {
      title: 'Microservices Architecture',
      description: 'Migrated monolithic application to microservices improving scalability and maintainability.',
      tags: ['Kubernetes', 'gRPC', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3862370/pexels-photo-3862370.jpeg?w=500&h=300&fit=crop',
    },
  ]

  const tags = ['all', 'React', 'Node.js', 'AWS', 'DevOps', 'PostgreSQL']

  const filteredProjects =
    selectedTag === 'all' ? projects : projects.filter((p) => p.tags.includes(selectedTag))

  return (
    <section id="projects" className={`projects ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="tag-filter">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag === 'all' ? 'All Projects' : tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-card" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-btn">View Project</button>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
