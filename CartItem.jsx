
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  return (
    <div className="page-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start shopping!</p>
      ) : (
        <>
          <p>Total plants: {totalQuantity}</p>

          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              <div className="cart-actions">
                <button
                  disabled={item.quantity <= 1}
                  onClick={() =>
                    dispatch(updateQuantity({
                      name: item.name,
                      quantity: item.quantity - 1,
                    }))
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(updateQuantity({
                      name: item.name,
                      quantity: item.quantity + 1,
                    }))
                  }
                >
                  +
                </button>

                <button
                  className="danger-button"
                  onClick={() => dispatch(removeItem(item.name))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h2>Total: ${totalCost.toFixed(2)}</h2>
            <button
              className="primary-button"
              onClick={() => window.alert('Thank you for shopping at Paradise Nursery!')}
            >
              Checkout
            </button>
            <button onClick={() => window.history.back()}>
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}
