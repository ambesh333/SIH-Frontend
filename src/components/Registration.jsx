import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate(); 
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');

  const handleSignup = () => {
    navigate('/'); 
  };

  return (
    <div className="signup-card">
      <h2 className='card-name'>Sign Up</h2>
      <div className="input-group">
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          id="state"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          id="district"
          placeholder="District"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button className='button-one' onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Registration;
