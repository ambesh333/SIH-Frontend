import React, { useState } from 'react';

const PredictionForm = ({ onSubmit, data, handleChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="State">State:</label>
            <input
                type="text"
                id="State"
                name="State"
                value={data.State}
                onChange={handleChange}
            />
            {/* ... other input fields ... */}
            <button type="submit">Predict Price</button>
        </form>
    );
};

export default PredictionForm;
