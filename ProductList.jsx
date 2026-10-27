import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import CartItem from './CartItem.jsx';

const img = (s) => `https://picsum.photos/seed/${encodeURIComponent(s)}/200`;
const mk = (names, prices) => names.map((n, i) => ({ name: n, image: img(n), cost: prices[i] }));

const categories = [
  { category: 'Air Purifying Plants', plants: mk(['Snake Plant','Spider Plant','Peace Lily','Boston Fern','Rubber Plant','Aloe Vera'], [15,12,18,14,20,10]) },
  { category: 'Aromatic Plants', plants: mk(['Lavender','Jasmine','Rosemary','Mint','Lemon Balm','Basil'], [16,22,13,8,11,9]) },
  { category: 'Low Maintenance Plants', plants: mk(['ZZ Plant','Pothos','Cactus','Jade Plant','Succulent Mix','Money Tree'], [25,10,7,14,19,30]) },
];

export default function ProductList({ onHome }) {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);
  const [showCart, setShowCart] = useState(false);
  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const isAdded = (name) => items.some((i) => i.name === name);

  return (
    <div>
      <div className="navbar">
        <div><strong>Paradise Nursery</strong></div>
        <div>
          <a onClick={onHome}>Home</a>
          <a onClick={() => setShowCart(false)}>Plants</a>
          <a onClick={() => setShowCart(true)}>Cart</a>
        </div>
        <div className="cart-icon" onClick={() => setShowCart(true)}>
          🛒<span className="cart-count">{totalCount}</span>
        </div>
      </div>
      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        categories.map((c) => (
          <div className="category" key={c.category}>
            <h2>{c.category}</h2>
            <div className="product-grid">
              {c.plants.map((p) => (
                <div className="product-card" key={p.name}>
                  <img src={p.image} alt={p.name} />
                  <h3>{p.name}</h3>
                  <p>${p.cost}</p>
                  <button disabled={isAdded(p.name)} onClick={() => dispatch(addItem(p))}>
                    {isAdded(p.name) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
