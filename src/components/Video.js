import React from 'react'
import {Link} from 'react-router-dom'
import './Video.css'

import nuggieVideo from '../assets/Plain_n_Simple.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={nuggieVideo} type='video/mp4' />
        </video>
    <div className='content'>
    <h1>Crispie. Crunchie. Nuggie.</h1>
    <p>McDonalds: Contact us at businessinquiries@nuggie.com</p>
    
     <div>
        <Link to='/' className='btn'>Crisp.</Link>
        <Link to='/' className='btn btn-light'>Crunch.</Link>

    </div>
    </div>
    </div>
  )
}

export default Video