import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';

export default function CartItem({ onContinueShopping }) {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.cost * i.quantity, 0);

  const dec = (i) =>
    i.quantity > 1
      ? dispatch(updateQuantity({ name: i.name, quantity: i.quantity - 1 }))
      : dispatch(removeItem(i.name));

  return (
    <div className="cart-page">
      <h2>Total Cart Amount: ${total}</h2>
      {items.map((i) => (
        <div className="cart-item" key={i.name}>
          <img src={i.image} alt={i.name} />
          <div style={{ flex: 1 }}>
            <h3>{i.name}</h3>
            <p>Unit Price: ${i.cost}</p>
            <button onClick={() => dec(i)}>-</button>
            <span>{i.quantity}</span>
            <button onClick={() => dispatch(updateQuantity({ name: i.name, quantity: i.quantity + 1 }))}>+</button>
            <p>Total: ${i.cost * i.quantity}</p>
          </div>
          <button onClick={() => dispatch(removeItem(i.name))}>Delete</button>
        </div>
      ))}
      <div className="cart-actions">
        <button onClick={onContinueShopping}>Continue Shopping</button>
        <button onClick={() => alert('Coming Soon')}>Checkout</button>
      </div>
    </div>
  );
}
