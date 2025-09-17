import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>

        {/* Column 1: Logo, description, social icons */}
        <div className='footer-content-left'>
          <img src={assets.logo} alt="Logo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nesciunt, blanditiis sequi quia praesentium perferendis quaerat molestiae omnis. Ipsum atque saepe temporibus excepturi. Harum obcaecati assumenda, officiis dicta soluta sint.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Column 2: Company links */}
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+917872430128</li>
            <li>contact9087@gmail.com</li>
          </ul>
        </div>

      </div>

      <hr />

      <p className="footer-copy-right">
        © 2024 Tomato.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
