import React from 'react';
import { useNavigate } from 'react-router-dom';

import emblemImage from '../images/download.png';
import pmksyImage from '../images/PMKSY.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

function LandingPage() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <div className='inline-block p-4'>
          <img className='emblem' src={emblemImage} alt='Emblem' />
        </div>
        <div className='sideimage'>
          <div>
            <img
              className='img-one'
              src={pmksyImage}
              alt='PMKSY Logo'
              height='100'
              width='100'
              style={{ marginLeft: '10px' }}
            />
          </div>
        </div>
      </div>

      <div className='button-container'>
        <button
          className='login bg-green-500 text-white rounded-full px-4 py-2'
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <button
          className='login bg-green-500 text-white rounded-full px-4 py-2'
          onClick={handleLogin}
        >
          Login
        </button>
      </div>

      <section className='banner bg-cover bg-center bg-no-repeat'>
        <div className='home'>
          <div className='homeContent'>
            <h2 className='text-4xl font-bold mb-4'>
              Welcome to FPO login portal
            </h2>
            <p className='text-gray-700'>
              As a Farmer Produce Organisation (FPO), we champion the spirit of
              community and sustainability in agriculture, empowering local
              farmers to flourish. Our platform serves as a collaborative space,
              offering seamless access to markets, resources, and a supportive
              network. Explore our website to access market insights, streamline
              transactions, and foster meaningful connections within the
              agricultural ecosystem. Join us in cultivating a brighter, more
              sustainable future for farming communities worldwide.
            </p>
            <div className='home-btn mt-4'>
              <a href='https://enam.gov.in/web/resources'>
                <button className='bg-green-500 text-white rounded-full px-4 py-2'>
                  Learn more
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer bg-gray-900 text-white py-16'>
        <div className='footer-container flex justify-between'>
          <div className='footer-col'>
            <h4 className='text-2xl mb-6'>Related Sites</h4>
            <ul>
              <li>
                <a href='https://wdcpmksy.dolr.gov.in/'>WDC 2.0</a>
              </li>
              <li>
                <a href='https://pmksy.gov.in/'>PMKSY</a>
              </li>
              <li>
                <a href='https://enam.gov.in/web/stakeholders-Involved/fpos'>
                  e-NAM
                </a>
              </li>
              <li>
                <a href='https://agricoop.gov.in/'>Ministry of Agriculture</a>
              </li>
            </ul>
          </div>

          <div className='footer-col'>
            <h4 className='text-2xl mb-6'>Follow us</h4>
            <div className='social-links flex'>
              <a
                href='https://www.facebook.com/groups/1953690417983725/'
                className='mr-2'
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href='https://twitter.com/agrigoi?lang=en' className='mr-2'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href='https://www.instagram.com/icar.india/?hl=en'
                className='mr-2'
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href='https://in.linkedin.com/company/naff'>
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
