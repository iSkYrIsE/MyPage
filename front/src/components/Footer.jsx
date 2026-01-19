import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dev</h3>
            <p>Building the future, one line of code at a time.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#projects">Web Development</a>
              </li>
              <li>
                <a href="#projects">Cloud Architecture</a>
              </li>
              <li>
                <a href="#projects">DevOps Consulting</a>
              </li>
              <li>
                <a href="#projects">System Design</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="#" aria-label="GitHub">
                GitHub
              </a>
              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#" aria-label="Twitter">
                Twitter
              </a>
              <a href="#" aria-label="Email">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p>Crafted with React & Vite</p>
        </div>
      </div>
    </footer>
  )
}
