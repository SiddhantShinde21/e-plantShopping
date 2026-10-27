
import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

export default function App() {
  const [page, setPage] = useState('home');

  if (page === 'plants') {
    return (
      <div>
        <nav className="navbar">
          <h2>Paradise Nursery</h2>
          <div>
            <button onClick={() => setPage('home')}>Home</button>
            <button onClick={() => setPage('plants')}>Plants</button>
            <button onClick={() => setPage('cart')}>Cart</button>
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
          <h2>Paradise Nursery</h2>
          <div>
            <button onClick={() => setPage('home')}>Home</button>
            <button onClick={() => setPage('plants')}>Plants</button>
            <button onClick={() => setPage('cart')}>Cart</button>
          </div>
        </nav>
        <CartItem />
      </div>
    );
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Bring nature home with our beautiful collection of plants.</p>
        <button
          className="primary-button"
          onClick={() => setPage('plants')}
        >
          Get Started
        </button>
        <AboutUs />
      </div>
    </div>
  );
}
