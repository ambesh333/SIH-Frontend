import React, { useState } from "react";
import { useNavigate } from "react-router";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [machinery, setMachinery] = useState("");
  const [capital, setCapital] = useState("");
  const [land, setLand] = useState("");
  const [crop, setCrop] = useState("");

  const handleSignup = () => {
    navigate("/login");
  };

  return (
    <div className="reg-background">
    <div className="signup-card">
      <h2 className="card-name">Sign Up</h2>
      <div className="input-group">
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
      <div className='input-group'>
        <input
          type='text'
          id='machinery'
          placeholder='Machinery'
          value={machinery}
          onChange={(e) => setMachinery(e.target.value)}
        />
      </div>
      <div className='input-group'>
        <input
          type='text'
          id='capital'
          placeholder='Capital'
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        />
      </div>
      <div className='input-group'>
        <input
          type='text'
          id='land'
          placeholder='Land'
          value={land}
          onChange={(e) => setLand(e.target.value)}
        />
      </div>
      <div className='input-group'>
        <input
          type='text'
          id='crop'
          placeholder='Crop'
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button className="button-one" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
    </div>
  );
};

export default Registration;
