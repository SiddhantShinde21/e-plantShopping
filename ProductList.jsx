
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', price: 15, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?w=400' },
      { name: 'Peace Lily', price: 18, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400' },
      { name: 'Spider Plant', price: 12, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400' },
      { name: 'Boston Fern', price: 16, image: 'https://images.unsplash.com/photo-1597055181300-c6f4a9b7c1a1?w=400' },
      { name: 'Areca Palm', price: 20, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400' },
      { name: 'Rubber Plant', price: 22, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' }
    ]
  },
  {
    category: 'Succulents',
    plants: [
      { name: 'Aloe Vera', price: 10, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
      { name: 'Jade Plant', price: 14, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
      { name: 'Echeveria', price: 11, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
      { name: 'Burro Tail', price: 13, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
      { name: 'Zebra Haworthia', price: 12, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
      { name: 'String of Pearls', price: 17, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' }
    ]
  },
  {
    category: 'Indoor Plants',
    plants: [
      { name: 'Monstera', price: 25, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
      { name: 'Fiddle Leaf Fig', price: 28, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
      { name: 'Calathea', price: 21, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
      { name: 'Dracaena', price: 19, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400' },
      { name: 'Parlor Palm', price: 18, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400' },
      { name: 'Chinese Evergreen', price: 23, image: 'https://images.unsplash.com/photo-1597055181300-c6f4a9b7c1a1?w=400' }
    ]
  }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const addedToCart = {};
  cartItems.forEach((item) => {
    addedToCart[item.name] = true;
  });

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="page-container">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div>
          <a href="#" onClick={(event) => { event.preventDefault(); window.location.reload(); }}>Home</a>
          <a href="#plants">Plants</a>
          <a href="#cart" className="cart-icon">
            🛒 Cart <span className="cart-quantity">{totalQuantity}</span>
          </a>
        </div>
      </nav>

      <h1 id="plants">Our Plants</h1>

      {plantsArray.map((category) => (
        <section className="plant-category" key={category.category}>
          <h2>{category.category}</h2>

          <div className="product-list">
            {category.plants.map((plant) => (
              <article className="product-card" key={plant.name}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price.toFixed(2)}</p>

                <button
                  className="primary-button"
                  disabled={addedToCart[plant.name]}
                  onClick={() => dispatch(addItem(plant))}
                >
                  {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
