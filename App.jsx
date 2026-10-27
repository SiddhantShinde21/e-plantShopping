import { useState } from 'react';
import ProductList from './ProductList.jsx';
import AboutUs from './AboutUs.jsx';

function App() {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <div>
      {!showProducts ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-btn" onClick={() => setShowProducts(true)}>Get Started</button>
            <AboutUs />
          </div>
        </div>
      ) : (
        <ProductList onHome={() => setShowProducts(false)} />
      )}
    </div>
  );
}
export default App;
