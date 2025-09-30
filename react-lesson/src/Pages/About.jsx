import React from 'react';

function About() {
  const containerStyle = {
    padding: '60px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const textStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>About Nami Furnitures</h1>
      <p style={textStyle}>
        Welcome to Nami Furnitures, your premier destination for high-quality, stylish furniture that transforms your living spaces. Founded with a passion for craftsmanship and design, we offer a wide range of furniture pieces that blend modern aesthetics with timeless comfort.
      </p>
      <p style={textStyle}>
        Our mission is to provide our customers with durable, affordable furniture that enhances their homes and reflects their unique style. From cozy chairs and elegant tables to complete room sets, we curate products that are not only functional but also beautiful.
      </p>
      <p style={textStyle}>
        At Nami Furnitures, we believe in sustainable practices and work with trusted manufacturers to ensure every piece meets our high standards of quality. Whether you're furnishing a new home or refreshing your current space, we're here to help you create the perfect environment.
      </p>
    </div>
  );
}

export default About;