import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="page-container">
        <h2>Your Shopping Cart</h2>
        <p>Your cart is empty. Explore our plants and find your favourite!</p>
      </main>
    );
  }

  return (
    <main className="page-container">
      <h2>Your Shopping Cart</h2>
      <p>Total plants: {totalItems}</p>

      {items.map((item) => (
        <article className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>

          <div className="cart-actions">
            <button
              aria-label={`Decrease ${item.name} quantity`}
              disabled={item.quantity <= 1}
              onClick={() =>
                dispatch(updateQuantity({
                  id: item.id,
                  quantity: item.quantity - 1,
                }))
              }
            >
              −
            </button>

            <span>{item.quantity}</span>

            <button
              aria-label={`Increase ${item.name} quantity`}
              onClick={() =>
                dispatch(updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1,
                }))
              }
            >
              +
            </button>

            <button
              className="danger-button"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Delete
            </button>
          </div>
        </article>
      ))}

      <section className="cart-summary">
        <h3>Total: ${totalCost.toFixed(2)}</h3>
        <button className="primary-button" onClick={() => window.alert('Thank you for shopping at Paradise Nursery!')}>
          Checkout
        </button>
        <button onClick={() => window.history.back()}>
          Continue Shopping
        </button>
      </section>
    </main>
  );
}
