import React from 'react'
import './Footer.css'
import logo from '../../images/logo.svg'
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'
import instagram from '../../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className='footer_body'>
      <div className='body_up'>
        <h3>Boost your links today</h3>
        <button className='body_up_btn'>Get started</button>
      </div>
      <div className='body_down'>
        <div className='left'>
          <img style={{ color: '#ffff' }} src={logo} alt='' />
        </div>
        <div className='center'>
          <div>
            <h4>Features</h4>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className='right'>
          <img src={facebook} alt='' />
          <img src={twitter} alt='' />
          <img src={pinterest} alt='' />
          <img src={instagram} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Footer
