import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantCategories = [
  {
    name: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 18, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b66?auto=format&fit=crop&w=500&q=80' },
      { id: 2, name: 'Peace Lily', price: 22, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80' },
      { id: 3, name: 'Spider Plant', price: 15, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c0a4?auto=format&fit=crop&w=500&q=80' },
    ],
  },
  {
    name: 'Succulents',
    plants: [
      { id: 4, name: 'Aloe Vera', price: 12, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80' },
      { id: 5, name: 'Echeveria', price: 14, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=500&q=80' },
      { id: 6, name: 'Jade Plant', price: 16, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80' },
    ],
  },
  {
    name: 'Low-Light Plants',
    plants: [
      { id: 7, name: 'ZZ Plant', price: 20, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80' },
      { id: 8, name: 'Pothos', price: 17, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80' },
      { id: 9, name: 'Monstera', price: 28, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80' },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <main className="page-container">
      <h2>Discover Your Perfect Plant</h2>
      <p>Bring a little more green into your life.</p>

      {plantCategories.map((category) => (
        <section className="plant-category" key={category.name}>
          <h2>{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const inCart = cartItems.some((item) => item.id === plant.id);

              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    disabled={inCart}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {inCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
