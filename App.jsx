
import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

export default function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
  };

  if (!showProductList && !showCart) {
    return (
      <div className="background-image">
        <div className="landing-content">
          <h1>Welcome to Paradise Nursery</h1>
          <p>
            Discover beautiful plants to bring nature into your home.
          </p>
          <button
            className="primary-button"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
          <AboutUs />
        </div>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <button onClick={handleHomeClick}>Home</button>
          <button onClick={handleGetStartedClick}>Plants</button>
          <button onClick={handleCartClick}>Cart</button>
        </div>
      </nav>

      {showProductList && <ProductList />}
      {showCart && <CartItem />}
    </div>
  );
}
