import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="container">

        <div className="contact-hero">

          <h1>Contact HunarHub</h1>

          <p>
            Connect with our team for support,
            partnerships and marketplace help.
          </p>

        </div>

        <div className="contact-grid">

          <div className="contact-info-card">

            <h2>Get In Touch</h2>

            <div className="contact-item">
              <h4>Email</h4>
              <p>support@hunarhub.com</p>
            </div>

            <div className="contact-item">
              <h4>Phone</h4>
              <p>+91 9999999999</p>
            </div>

            <div className="contact-item">
              <h4>Location</h4>
              <p>Mumbai, India</p>
            </div>

            <div className="contact-item">
              <h4>Working Hours</h4>
              <p>Mon - Sat : 9 AM - 8 PM</p>
            </div>

          </div>

          <div className="contact-form-card">

            <h2>Send Message</h2>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            />

            <button>
              Send Message
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}