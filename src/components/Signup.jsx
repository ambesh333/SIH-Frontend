import React, { useState } from 'react';

const SignupPage = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [aadharNo, setAadharNo] = useState('');

  const handleSignup = () => {
    console.log('Signing up with:', { mobileNo, aadharNo, otp});
  };

  return (
    <div className="signup-card">
      <h2>Sign Up</h2>
      <div className="input-group">
        <input
          type="text"
          id="aadharNo"
          placeholder="Aadhar number"
          value={aadharNo}
          onChange={(e) => setAadharNo(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          id="mobileNo"
          placeholder="Mobile Number"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          id="otp"
          placeholder="1234"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button onClick={handleSignup}>Submit</button>
      </div>
    </div>
  );
};

export default SignupPage;
