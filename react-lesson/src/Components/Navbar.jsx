import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "rgba(255, 255, 255, 0.95)",
    color: "#2c3e50",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "70px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
    borderBottom: "1px solid #e9ecef",
  };

  const titleStyle = {
    fontSize: "26px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "30px",
    margin: 0,
    padding: 0,
  };

  const liStyle = {
    cursor: "pointer",
    fontSize: "18px",
    transition: "color 0.3s ease",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        <h1 style={titleStyle}>Nami Furnitures</h1>
      </Link>
      <ul style={ulStyle}>
        {[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "Cart", path: "/cart" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" }
        ].map((item) => (
          <li key={item.name} style={liStyle}>
            <Link
              to={item.path}
              style={{ color: 'inherit', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
              onMouseLeave={(e) => (e.target.style.color = "#2c3e50")}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

