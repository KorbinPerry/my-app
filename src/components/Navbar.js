import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)




  return (
        <div className='header'>
            <Link to='/'><h1>LOGO</h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Page1'>Page 1</Link>
                </li>
                <li>
                    <Link to='/Page2'>Page 2</Link>
                </li>
                <li>
                    <Link to='/Page3'>Page 3</Link>
                </li>
         
             </ul>
             <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size ={20} style={{color: '#fff'}} />) : (<FaBars size ={20} style={{color: '#fff'}} />)}
                 
             </div>
         </div>
     )
}

export default Navbar