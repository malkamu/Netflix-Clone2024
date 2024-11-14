import React from 'react';
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";


const Footer = () => {
  
    return (
      <div className="footerHead">
        <div className='icon_list'>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <CiYoutube />
          </li>
         
        </div>
        <div className="Footer_container">
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className="footer2">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    );
}
export default Footer;
