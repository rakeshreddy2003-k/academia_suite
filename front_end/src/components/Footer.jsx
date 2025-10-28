import React from "react";
import logo from "../assets/logo.png"; // ensure your logo is at src/assets/logo.png

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <div className="newsletter-left">
              <h4>Sign Up For News & Updates</h4>
              <p>Get email updates about new features, admissions, workshops and special campus events.</p>
            </div>
            <div className="newsletter-right">
              <input type="email" placeholder="Your email address" aria-label="email" />
              <button className="btn-subscribe">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main container">
        <div className="footer-column logo-col">
          <img src={logo} alt="Academia Suite Logo" className="footer-logo-img" />
          <h3 className="brand-font">Academia Suite</h3>
          <p className="muted">Streamlining Administration, Empowering Learning.</p>
        </div>

        <div className="footer-column links-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column contact-col">
          <h5>Contact</h5>
          <p>📍 21 Academic Street, Bengaluru, India</p>
          <p>✉️ info@academiasuite.edu</p>
          <p>📞 +91 98765 43210</p>
        </div>

        <div className="footer-column social-col">
          <h5>Campus & Community</h5>
          <p className="muted">Follow our updates and join the community.</p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="facebook" className="social" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" aria-label="instagram" className="social" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" aria-label="twitter" className="social" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" aria-label="linkedin" className="social" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} <span className="brand-font">Academia Suite</span>. All rights reserved. • Built with care</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
