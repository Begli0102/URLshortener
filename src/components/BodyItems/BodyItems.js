import React from 'react'
import './BodyItems.css'

import brand from '../../images/icon-brand-recognition.svg'
import detailed from '../../images/icon-detailed-records.svg'
import fully from '../../images/icon-fully-customizable.svg'

const Body_items = () => {
  return (
    <div>
      <div className='body_container_middle'>
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with our advanced
          stattistics dashboard
        </p>
      </div>

      <div className='body_container_bottom'>
        <div className='container_bottom1'>
          <div className='image'>
            <img src={brand} alt='brand' />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content
          </p>
        </div>

        <div className='container_bottom2'>
          <div className='image'>
            <img src={detailed} alt='detailed' />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knoing when and where
            people engage with your cntent helps inform better dcisions
          </p>
        </div>
        <div className='container_bottom3'>
          <div className='image'>
            <img src={fully} alt='fully' />
          </div>
          <h3>Fully Costumizable</h3>
          <p>
            Improve brand awareness and content discoverablilita through
            customizable links, supercharging audience engagement
          </p>
        </div>
      </div>
    </div>
  )
}

export default Body_items
