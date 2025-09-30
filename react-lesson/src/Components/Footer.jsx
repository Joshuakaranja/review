import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#2c3e50",
        color: "white",
        padding: "40px 20px",
        marginTop: "auto",
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '20px' }}>
          <div>
            <h3 style={{ marginBottom: '15px', color: '#FFD700' }}>Nami Furnitures</h3>
            <p>Your one-stop shop for quality furniture that combines style and comfort.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '15px' }}>Contact Info</h4>
            <p>📞 +254 741838783</p>
            <p>✉️ support@namifurnitures.com</p>
            <p>📍 Nairobi, Kenya</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '15px' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={iconStyle}>
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={iconStyle}>
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" style={iconStyle}>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #444', paddingTop: '20px', textAlign: 'center' }}>
          <p>© {new Date().getFullYear()} Nami Furnitures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const iconStyle = {
  color: "white",
  fontSize: "20px",
  marginLeft: "10px",
  textDecoration: "none",
};

export default Footer;
