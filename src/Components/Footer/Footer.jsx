import React from 'react';
import './Footer.css';
import settings from '../../Assets/image/u_setting.png';
import statistics from '../../Assets/image/u_chart-pie-alt.png';
import home from '../../Assets/image/u_home-alt.png';
import profile from '../../Assets/image/u_user.png';


function Footer(){
   return(
      <footer className="footer container">

      <div className="footer__circle"></div>

      <ul className="footer__list">

            <li className="footer__items">
                  <img className="footer_icons" src={settings} alt="icons" />
                  <h3 className="footer__heading">Settings</h3>
            </li>

            <li className="footer__items">
                  <img className="footer_icons" src={statistics} alt="icons" />
                  <h3 className="footer__heading">Statistics</h3>
            </li>

            <li className="footer__items">
                  <img className="footer_icons" src={home} alt="icons" />
                  <h3 className="footer__heading">Home</h3>
            </li>

            <li className="footer__items">
                  <img className="footer_icons" src={profile} alt="icons" />
                  <h3 className="footer__heading">Profile</h3>
            </li>

      </ul>

      <div className="footer__line"></div>

   </footer>
   )
}

export default Footer;