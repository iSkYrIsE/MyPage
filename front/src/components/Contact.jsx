import { useState } from 'react'
import '../styles/contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactLinks = [
    { icon: '📧', label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: '#' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/yourprofile', href: '#' },
    { icon: '🐦', label: 'Twitter', value: '@yourhandle', href: '#' },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="intro">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to get in touch!
            </p>

            <div className="contact-links">
              {contactLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="link-icon">{link.icon}</span>
                  <div className="link-content">
                    <div className="link-label">{link.label}</div>
                    <div className="link-value">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              <a href="#" className="social-icon">
                <span>f</span>
              </a>
              <a href="#" className="social-icon">
                <span>in</span>
              </a>
              <a href="#" className="social-icon">
                <span>tw</span>
              </a>
              <a href="#" className="social-icon">
                <span>gh</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {submitted && (
              <div className="success-message">
                <span>✓</span> Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
