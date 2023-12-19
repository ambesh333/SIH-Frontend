import React, { useState } from 'react';

const Registration = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');

  const handleSignup = () => {
    console.log('Signing up with:', { name, state, district });
  };

  return (
    <div className='signup-card'>
      <h2>Sign Up</h2>
      <div className='input-group'>
        <input
          type='text'
          id='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='input-group'>
        <input
          type='text'
          id='state'
          placeholder='State'
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className='input-group'>
        <input
          type='text'
          id='district'
          placeholder='District'
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>
      <div className='button-group'>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Registration;
