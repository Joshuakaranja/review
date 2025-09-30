import React from 'react';
import ProductCard from '../Components/ProductCard';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Modern Chair',
      price: 'ksh 15,000',
      image: 'https://plus.unsplash.com/premium_photo-1705169612410-50d9576035f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVybiUyMGNoYWlyfGVufDB8fDB8fHww'
    },
    {
      id: 2,
      name: 'Elegant Table',
      price: 'ksh 25,000',
      image: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFibGV8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 3,
      name: 'Cozy Sofa',
      price: 'ksh 49,900',
      image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvZmF8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 4,
      name: 'Wooden Cabinet',
      price: 'ksh 35,000',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiaW5ldHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 5,
      name: 'Bed Frame',
      price: 'ksh 40,000',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkJTIwZnJhbWV8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 6,
      name: 'Dining Set',
      price: 'ksh 60,000',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluZXxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  const containerStyle = {
    padding: '80px 20px',
    maxWidth: '1400px',
    margin: '0 auto',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    justifyItems: 'center',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '50px',
    color: '#2c3e50',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Our Products</h1>
      <div className="product-grid" style={gridStyle}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;