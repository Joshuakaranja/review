import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const containerStyle = {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    gap: '60px',
    alignItems: 'flex-start',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  };

  const formContainerStyle = {
    flex: 1,
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  };

  const infoStyle = {
    flex: 1,
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#2c3e50',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const inputStyle = {
    padding: '12px',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '150px',
    resize: 'vertical',
  };

  const buttonStyle = {
    padding: '14px 28px',
    backgroundColor: '#FFD700',
    color: '#2c3e50',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={titleStyle}>Contact Us</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={textareaStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2c3e50';
              e.target.style.color = '#FFD700';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FFD700';
              e.target.style.color = '#2c3e50';
            }}
          >
            Send Message
          </button>
        </form>
      </div>
      <div style={infoStyle}>
        <h2 style={{ color: '#FFD700', marginBottom: '20px' }}>Get in Touch</h2>
        <div style={{ marginBottom: '20px' }}>
          <p style={{ margin: '10px 0' }}><strong>📍 Address:</strong> 123 Furniture St, Nairobi, Kenya</p>
          <p style={{ margin: '10px 0' }}><strong>📞 Phone:</strong> +254 123 456 789</p>
          <p style={{ margin: '10px 0' }}><strong>✉️ Email:</strong> info@nami-furnitures.com</p>
          <p style={{ margin: '10px 0' }}><strong>🕒 Hours:</strong> Mon-Fri 9am-6pm</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;