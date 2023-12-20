import React, { useState } from 'react';

const Sell = ({ isOpen, onClose, item }) => {
  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return null;
  }

  const basePrice = parseFloat(item.basePrice);  
  const totalPrice = basePrice * quantity;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRent = () => {
    console.log(`Rent ${quantity} ${item.title}(s) for a total of $${totalPrice}`);
    onClose(); 
  };

  return (
    <div className={`hire ${isOpen ? 'open' : ''}`}>
      <div className="hire-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="hire-name">{item.title}</h2>
        <img 
          src={item.image}
          alt={item.title}
        />
        <div className="quantity-container">
          <button className="quantity-container button decrease" onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button className="quantity-container button" onClick={handleIncrease}>+</button>
        </div>
        <p className="hire-price">Total Price: ₹{totalPrice}</p>
        <button className="button-rent" onClick={handleRent}>Buy</button>
      </div>
    </div>
  );
};

export default Sell;
