import React, { useState } from 'react';

const Hire = ({ isOpen, onClose, item }) => {
  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return null;
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRent = () => {
    console.log(`Rent ${quantity} ${item.title}(s)`);
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
        <button className="button-rent" onClick={handleRent}>Rent</button>
      </div>
    </div>
  );
};

export default Hire;
