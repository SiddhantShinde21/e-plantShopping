import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

export default function App() {
  const [page, setPage] = useState('landing');

  if (page === 'products') {
    return (
      <div>
        <nav className="navbar">
          <h1>🌿 Paradise Nursery</h1>
          <div className="nav-links">
            <button onClick={() => setPage('landing')}>Home</button>
            <button onClick={() => setPage('products')}>Plants</button>
            <button onClick={() => setPage('cart')}>Cart</button>
            <button onClick={() => setPage('about')}>About Us</button>
          </div>
        </nav>
        <ProductList />
      </div>
    );
  }

  if (page === 'cart') {
    return (
      <div>
        <nav className="navbar">
          <h1>🌿 Paradise Nursery</h1>
          <div className="nav-links">
            <button onClick={() => setPage('landing')}>Home</button>
            <button onClick={() => setPage('products')}>Continue Shopping</button>
            <button onClick={() => setPage('about')}>About Us</button>
          </div>
        </nav>
        <CartItem />
      </div>
    );
  }

  if (page === 'about') {
    return (
      <div>
        <nav className="navbar">
          <h1>🌿 Paradise Nursery</h1>
          <div className="nav-links">
            <button onClick={() => setPage('landing')}>Home</button>
            <button onClick={() => setPage('products')}>Plants</button>
            <button onClick={() => setPage('cart')}>Cart</button>
          </div>
        </nav>
        <AboutUs />
      </div>
    );
  }

  return (
    <main className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>
          Bring nature home. Discover beautiful indoor plants, air-purifying
          greens, and succulents to brighten every space.
        </p>
        <button className="primary-button" onClick={() => setPage('products')}>
          Get Started
        </button>
      </div>
    </main>
  );
}
