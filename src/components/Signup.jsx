import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router";
const SignupPage = () => {
  const navigate = useNavigate();
  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOtp] = useState("");
  const [aadharNo, setAadharNo] = useState("");

  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <div className="signup-background">
    <div className="signup-card">
      <h2 className="card-name">Sign Up</h2>
      <div className="input-group">
        <input
          type='text'
          id='aadharNo'
          placeholder='Aadhar number'
          value={aadharNo}
          onChange={(e) => setAadharNo(e.target.value)}
        />
      </div>
      <div className='input-group'>
        <input
          type='text'
          id='mobileNo'
          placeholder='Mobile Number'
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </div>
      <div className='input-group'>
        <input
          type='text'
          id='otp'
          placeholder='OTP'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button className="button-one" onClick={handleSignup}>
          Submit
        </button>
      </div>
    </div>
    </div>
  );
};

export default SignupPage;
