import React from 'react';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Modern Chair', price: 15000, quantity: 1, image: 'https://plus.unsplash.com/premium_photo-1705169612410-50d9576035f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVybiUyMGNoYWlyfGVufDB8fDB8fHww' },
    { id: 2, name: 'Elegant Table', price: 25000, quantity: 2, image: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFibGV8ZW58MHx8MHx8fDA%3D' },
    { id: 3, name: 'Cozy Sofa', price: 49900, quantity: 1, image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvZmF8ZW58MHx8MHx8fDA%3D' }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const containerStyle = {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '40px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '40px',
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '12px',
  };

  const imgStyle = {
    width: '80px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '4px',
  };

  const totalStyle = {
    textAlign: 'right',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#FFD700',
    color: '#2c3e50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    marginBottom: '20px',
    gap: '20px',
  };

  const imgCardStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const infoStyle = {
    flex: 1,
  };

  const deleteButtonStyle = {
    padding: '8px 16px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>Your cart is empty</p>
      ) : (
        <>
          <div>
            {cartItems.map(item => (
              <div key={item.id} style={cardStyle}>
                <img src={item.image} alt={item.name} style={imgCardStyle} />
                <div style={infoStyle}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{item.name}</h3>
                  <p style={{ margin: '5px 0', color: '#666' }}>Price: ksh {item.price.toLocaleString()}</p>
                  <p style={{ margin: '5px 0', color: '#666' }}>Quantity: {item.quantity}</p>
                  <p style={{ margin: '5px 0', fontWeight: 'bold', color: '#2c3e50' }}>
                    Total: ksh {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
                <button
                  style={deleteButtonStyle}
                  onClick={() => alert(`${item.name} removed from cart!`)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div style={{ ...totalStyle, backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px', marginTop: '30px' }}>
            <h3>Total: ksh {total.toLocaleString()}</h3>
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button style={buttonStyle}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;