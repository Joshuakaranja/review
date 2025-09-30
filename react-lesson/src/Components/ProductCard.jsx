import React from 'react';

function ProductCard({ image, name, price }) {
  const cardStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid #e9ecef',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
    backgroundColor: '#fff',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const imgStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const priceStyle = {
    fontSize: '18px',
    color: '#777',
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#FFD700',
    color: '#2c3e50',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '15px',
    transition: 'all 0.3s ease',
    fontSize: '14px',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
      }}
    >
      <img src={image} alt={name} style={imgStyle} />
      <h3 style={titleStyle}>{name}</h3>
      <p style={priceStyle}>{price}</p>
      <button
        style={buttonStyle}
        onClick={() => alert(`${name} added to cart!`)}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#2c3e50';
          e.target.style.color = '#FFD700';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#FFD700';
          e.target.style.color = '#2c3e50';
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;