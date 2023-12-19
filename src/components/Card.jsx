import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, showSignupOption }) => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };
  return (
    <div className='card'>
      <h2>{title}</h2>
      <div className='input-group'>
        <input type='text' placeholder='Username' />
      </div>
      <div className='input-group'>
        <input type='password' placeholder='Password' />
      </div>
      <div className='button-group'>
        <button>Login</button>
        <div className='signup-container'>
          <span className='not-registered'>Not registered?</span>
          <span className='signup-link' onClick={handleSignupClick}>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
