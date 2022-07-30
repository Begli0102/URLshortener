import React, { useState } from 'react'
import logo from '../../images/logo.svg'
import './Navbar.css'
import Hamburger from '../../images/bars-solid.svg'

const Navbar = () => {
  const [show, setShow] = useState(false)

  const handleDown = () => {
    setShow(true)
  }
  return (
    <div className='navbar'>
      <div className='navbar_left'>
        <img src={logo} alt='logo' />
        <div className='links'>
          <ul className='ul_links'>
            <li>
              <a href='#'>Feature</a>{' '}
            </li>
            <li>
              <a href='#'>Pricing</a>{' '}
            </li>
            <li>
              {' '}
              <a href='#'>Resources</a>{' '}
            </li>
          </ul>
        </div>
      </div>

      {!show ? (
        <img className='down' onClick={handleDown} src={Hamburger} alt='down' />
      ) : (
        <div className='navbar_right'>
          <button>Login</button>
          <button>Sign up</button>
        </div>
      )}
    </div>
  )
}

export default Navbar
