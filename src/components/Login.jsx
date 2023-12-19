import React, { useState } from 'react';
import Card from './Card';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState('farmer');

  const handleToggle = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="registration-screen">
      <div className="card-container">
        <Card title="Login" selectedRole={selectedRole} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default Login;
