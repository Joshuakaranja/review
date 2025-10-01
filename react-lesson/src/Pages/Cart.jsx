import React from "react";

function Cart({ cart, setCart }) {
  // Calculate total dynamically
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const containerStyle = {
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "40px",
  };

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    marginBottom: "20px",
    gap: "20px",
  };

  const imgCardStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const infoStyle = { flex: 1 };

  const deleteButtonStyle = {
    padding: "8px 16px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const totalStyle = {
    textAlign: "right",
    fontSize: "24px",
    fontWeight: "bold",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "30px",
  };

  const checkoutButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#FFD700",
    color: "#2c3e50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  // Function to remove an item
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Your Cart</h1>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>
          Your cart is empty
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={cardStyle}>
              <img src={item.image} alt={item.name} style={imgCardStyle} />
              <div style={infoStyle}>
                <h3 style={{ margin: "0 0 10px 0", color: "#2c3e50" }}>{item.name}</h3>
                <p style={{ margin: "5px 0", color: "#666" }}>Price: ksh {item.price.toLocaleString()}</p>
                <p style={{ margin: "5px 0", color: "#666" }}>Quantity: {item.quantity}</p>
                <p style={{ margin: "5px 0", fontWeight: "bold", color: "#2c3e50" }}>
                  Total: ksh {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
              <button
                style={deleteButtonStyle}
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div style={totalStyle}>
            <h3>Total: ksh {total.toLocaleString()}</h3>
          </div>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button style={checkoutButtonStyle}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
