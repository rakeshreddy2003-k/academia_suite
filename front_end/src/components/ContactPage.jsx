import React from "react";

function ContactPage() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 brand-font">Contact Us</h2>
      <p className="text-center mb-5">
        We’d love to hear from you! Reach out for inquiries, support, or collaborations.
      </p>

      <div className="row g-4">
        {/* Contact Info */}
        <div className="col-md-6">
          <h5>📍 Our Office</h5>
          <p>
            562 livespace Road, Street 32, Bengaluru, India <br />
            <strong>Phone:</strong> +91 9553452899 <br />
            <strong>Email:</strong> info@academiasuite.com
          </p>

          <h5 className="mt-4">🕒 Office Hours</h5>
          <p>Monday - Saturday: 9:00 AM to 6:00 PM</p>

          <h5 className="mt-4">🌐 Follow Us</h5>
          <div className="socials-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="col-md-6">
          <h5>Find Us Here:</h5>
          <div className="map-placeholder">
            <iframe
              title="Academia Suite Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089930093!2d77.46612614452614!3d12.953945614144494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1761660720448!5m2!1sen!2sin" 
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
