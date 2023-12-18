import React from 'react';
import { useNavigate } from 'react-router-dom';

import emblemImage from '../images/emblem.jfif'
import mgnregaLogo from '../images/MGNREGA_Logo (www.nreganews.tk).png';
import pmksyImage from '../images/PMKSY.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


// import './landingstyles.css'; 

function LandingPage() {
    const navigate = useNavigate(); 
    const handleSignup = () => {
        navigate('/signup'); 
      };

      const handleLogin = () => {
        navigate('/login'); 
      };
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'inline-block', padding: '10px' }}>
          <img src={emblemImage} alt="Emblem" height="110" width="100" />
        </div>
        <div className="d-inline-block sitename" style={{ padding: '10px' }}>
          <div>Farm Produce Organisation</div>
          <div style={{ fontSize: '20px', fontFamily: 'Georgia, Times New Roman, Times, serif' }}>
            Department of Agriculture and Farmer Welfare
          </div>
          <div style={{ fontSize: '15px', fontFamily: 'Georgia, Times New Roman, Times, serif' }}>
            Government of India
          </div>
        </div>
        <div className="sideimage">
          <div>
            <img src={mgnregaLogo} alt="MGNREGA Logo" height="110" width="100" style={{ marginLeft: '10px' }} />
          </div>
          <div>
            <img src={pmksyImage} alt="PMKSY Logo" height="110" width="100" style={{ marginLeft: '10px' }} />
          </div>
        </div>
      </div>

      <div className="button-container">
        <button className="login" onClick={handleSignup}>Sign Up</button>
        <button className="login" onClick={handleLogin}>Login</button>
      </div>

      <section className="banner">
        <div className="home">
          <div className="homeContent">
            <h2>Welcome to FPO login portal</h2>
            <p>
              As a Farmer Produce Organisation (FPO), we champion the spirit of community and sustainability in agriculture,
              empowering local farmers to flourish. Our platform serves as a collaborative space, offering seamless access to markets,
              resources, and a supportive network. Explore our website to access market insights, streamline transactions, and foster
              meaningful connections within the agricultural ecosystem. Join us in cultivating a brighter, more sustainable future for
              farming communities worldwide.
            </p>
            <div className="home-btn">
              <a href="https://enam.gov.in/web/resources">
                <button>Learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h4>Related Sites</h4>
            <ul>
              <li>
                <a href="https://wdcpmksy.dolr.gov.in/">WDC 2.0</a>
              </li>
              <li>
                <a href="https://pmksy.gov.in/">PMKSY</a>
              </li>
              <li>
                <a href="https://enam.gov.in/web/stakeholders-Involved/fpos">e-NAM</a>
              </li>
              <li>
                <a href="https://agricoop.gov.in/">Ministry of Agriculture</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/groups/1953690417983725/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com/agrigoi?lang=en">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/icar.india/?hl=en">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://in.linkedin.com/company/naff">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default LandingPage;
