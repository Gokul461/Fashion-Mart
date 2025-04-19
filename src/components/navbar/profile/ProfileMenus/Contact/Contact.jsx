import React from 'react';
import './Contact.css';
import { toast } from 'react-toastify';
const Contact = () => {
  const handleSubmit = (event) => {
    toast.success('Message sent!',{position: 'top-right', theme: 'colored'});
  };
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Have a question or feedback? Reach out — we'd love to hear from you!
      </p>

      <div className="contact-info">
        <p><strong>📧 Email:</strong> support@myshop.com</p>
        <p><strong>📞 Phone:</strong> +91 98765 43210</p>
        <p><strong>🏢 Address:</strong> 123, Shopping Street, Chennai, India</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Optional: Google Map */}
      <div className="map-container">
        <iframe
          title="shop-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2242064199117!2d78.12910611458729!3d9.919535576174332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58f5982c449%3A0x8b7e9e3dc47a032e!2sThirumalai%20Nayakkar%20Mahal!5e0!3m2!1sen!2sin!4v1713468987992!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
