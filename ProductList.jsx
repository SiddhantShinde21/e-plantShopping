
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plants = [
  { id: 1, name: 'Snake Plant', price: 15, category: 'Air Purifying', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?w=400' },
  { id: 2, name: 'Peace Lily', price: 18, category: 'Air Purifying', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400' },
  { id: 3, name: 'Spider Plant', price: 12, category: 'Air Purifying', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400' },
  { id: 4, name: 'Aloe Vera', price: 10, category: 'Succulents', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
  { id: 5, name: 'Jade Plant', price: 14, category: 'Succulents', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
  { id: 6, name: 'Echeveria', price: 11, category: 'Succulents', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
  { id: 7, name: 'Monstera', price: 25, category: 'Indoor Plants', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
  { id: 8, name: 'Rubber Plant', price: 22, category: 'Indoor Plants', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
  { id: 9, name: 'Areca Palm', price: 20, category: 'Indoor Plants', image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400' },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="page-container">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>
          <div className="plant-list">
            {plants.filter((plant) => plant.category === category).map((plant) => {
              const inCart = cartItems.some((item) => item.id === plant.id);

              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    className="primary-button"
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
    </div>
  );
}
