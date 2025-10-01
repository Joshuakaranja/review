import React, { useState, useEffect, use } from "react";

function ProductList() {
  // Sample product data
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://127.0.0.1:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Function to handle adding a product to the cart
  const addToCart = (product) => {

    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
    );

    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "20px" }}>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "15px", width: "250px", textAlign: "center" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "10px" }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p style={{ fontSize: "14px", color: "#555" }}>{product.description}</p>
            <button style={{ padding: "10px 20px", backgroundColor: "#333", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
