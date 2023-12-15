import React from 'react';

const PredictionResult = ({ prediction, error }) => {
  if (prediction) {
    return <p>Predicted Price: ₹{prediction}</p>;
  } else if (error) {
    return <p className="error">{error}</p>;
  } else {
    return null;
  }
};

export default PredictionResult;
