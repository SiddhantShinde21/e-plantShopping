```jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1
        })
      );
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    window.alert('Coming Soon');
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button
            className="primary-button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <p>Total plants in cart: {totalQuantity}</p>

          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-details">
                <h3>{item.name}</h3>

                <p>
                  Unit price: ${item.price.toFixed(2)}
                </p>

                <p>
                  Subtotal: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="cart-actions">
                <button
                  aria-label={`Decrease ${item.name}`}
                  onClick={() => handleDecrement(item)}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  aria-label={`Increase ${item.name}`}
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>

                <button
                  className="danger-button"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h2>
              Total Amount: ${totalCost.toFixed(2)}
            </h2>

            <button
              className="primary-button"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>

          <button
            className="primary-button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </>
      )}
    </div>
  );
}
```
