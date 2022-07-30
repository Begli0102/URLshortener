import React from 'react'
import './Header.css'
import image from '../../images/illustration-working.svg'



const Header = () => {
  return (
    <div className='header_items'>
      <div className='header_items_left'>
        <h1 className='header_item_title'>More than just a shorter list</h1>
        <p className='header_item_p'>
          Build your brand's recognition and get detailed insights on how your
          links are performed
        </p>
        <button className='header_item_btn'>Get Started</button>
      </div>
      <div className='header_items_right'>
        <img src={image} alt='' />
      </div>
    </div>
  )
}

export default Header
