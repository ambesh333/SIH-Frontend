import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Card = ({ title, showSignupOption }) => {
  const navigate = useNavigate();
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
    loginChecker,
  } = useStateContext();

  const handleSignupClick = () => {
    setLoginChecker(True);
    navigate("/signup");
  };
  return (
    <div className="card">
      <h2 className="card-name">{title}</h2>
      <div className="input-group">
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-group">
        <input type="password" placeholder="Password" />
      </div>
      <div className="button-group">
        <button className="button-one">Login</button>
        <div className="signup-container">
          <span className="not-registered">Not registered?</span>
          <span className="signup-link" onClick={handleSignupClick}>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
