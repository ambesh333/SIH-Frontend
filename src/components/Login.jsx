import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card'; 

const Login = () => {
  return (
    <div className="registration-screen">
      <div className="card-container">
        <Card title="Farmer Login" />
      </div>
      <div className="card-container">
        <Card title="FPO Login" />
      </div>
    </div>
  );
};

export default Login;
