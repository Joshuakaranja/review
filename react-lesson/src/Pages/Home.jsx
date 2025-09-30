import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
      
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "60px 80px",
          backgroundColor: "white",
          color: "black",
          minHeight: "80vh"
        }}
      >
        {/* Left Side - Text */}
        <div style={{ maxWidth: "50%" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px" }}>
            Welcome to Nami Furnitures
          </h1>
          <p style={{ fontSize: "18px", marginBottom: "30px" }}>
            Your one-stop shop for quality furniture that combines style and comfort.  
            Explore our wide range of products designed to enhance your living space.
          </p>
          <Link to="/products">
            <button
              style={{
                padding: "14px 28px",
                backgroundColor: "#FFD700",
                color: "#2c3e50",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                textDecoration: "none"
              }}
            >
              Shop Now
            </button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div>
          <img 
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1170&q=80" 
            alt="Furniture" 
            style={{ width: "450px", borderRadius: "12px", boxShadow: "0px 6px 15px rgba(0,0,0,0.4)" }}
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <section style={{ padding: "80px 40px", backgroundColor: "#f8f9fa", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px", color: "#2c3e50" }}>
          Featured Products
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "60px", color: "#666", maxWidth: "600px", margin: "0 auto 60px" }}>
          Check out our latest arrivals and best-sellers!
        </p>

        {/* Product Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ padding: "25px", border: "1px solid #e9ecef", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", backgroundColor: "#fff", transition: "transform 0.3s" }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <img src="https://plus.unsplash.com/premium_photo-1705169612410-50d9576035f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVybiUyMGNoYWlyfGVufDB8fDB8fHww" alt="Chair" style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }} />
            <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#2c3e50" }}>Modern Chair</h3>
            <p style={{ color: "#FFD700", fontSize: "18px", fontWeight: "bold" }}>ksh 15,000</p>
          </div>

          <div style={{ padding: "25px", border: "1px solid #e9ecef", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", backgroundColor: "#fff", transition: "transform 0.3s" }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <img src="https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFibGV8ZW58MHx8MHx8fDA%3D"
              alt="Table" style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }} />
            <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#2c3e50" }}>Elegant Table</h3>
            <p style={{ color: "#FFD700", fontSize: "18px", fontWeight: "bold" }}>ksh 25,000</p>
          </div>

          <div style={{ padding: "25px", border: "1px solid #e9ecef", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", backgroundColor: "#fff", transition: "transform 0.3s" }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <img src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvZmF8ZW58MHx8MHx8fDA%3D"
              alt="Sofa" style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }} />
            <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "#2c3e50" }}>Cozy Sofa</h3>
            <p style={{ color: "#FFD700", fontSize: "18px", fontWeight: "bold" }}>ksh 49,900</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: "80px 40px", backgroundColor: "#2c3e50", color: "white", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "30px" }}>
          Why Choose Us?
        </h2>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
          <div>
            <h3 style={{ color: "#FFD700", marginBottom: "15px" }}>Quality Craftsmanship</h3>
            <p>Our products are crafted with care, ensuring durability and style that lasts.</p>
          </div>
          <div>
            <h3 style={{ color: "#FFD700", marginBottom: "15px" }}>Customer Satisfaction</h3>
            <p>We prioritize your satisfaction with excellent service and support.</p>
          </div>
          <div>
            <h3 style={{ color: "#FFD700", marginBottom: "15px" }}>Modern Design</h3>
            <p>From cozy chairs to elegant tables, we design pieces that make your house feel like home.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
