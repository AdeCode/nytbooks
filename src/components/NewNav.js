import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFoursquare} from 'react-icons/fa'
import './newnav.css'
import { Link, NavLink } from 'react-router-dom'


function NewNav() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
      <>
      <div className='header'>
          <div className='logo-nav'>
              <div className='logo-container'>
                  <a href='#'>
                      <FaFoursquare className='logo'/>
                  </a>
              </div>
              <ul className={click ? 'nav-options active' : 'nav-options'}>
                  <li className='option' onClick={closeMobileMenu}>                    
                    <NavLink to='/' activestyle>Home</NavLink>
                  </li>
                  <li className='option' onClick={closeMobileMenu}>
                    <NavLink to='/books' activestyle>Books</NavLink>
                  </li>
                  <li className='option' onClick={closeMobileMenu}>
                    <NavLink to='/about' activestyle>About</NavLink>
                  </li>
                  <li className='option' onClick={closeMobileMenu}>
                    <NavLink to='/contact' activestyle>Contact</NavLink>
                  </li>
                  <li className='option' onClick={closeMobileMenu}>
                    <NavLink to='/qr' activestyle>QR</NavLink>
                  </li>
                  <li className="option mobile-option" onClick={closeMobileMenu}>
                    <a href="#" className='link'>SIGN-IN</a>
                  </li>
                  {/* <li className="option mobile-option" onClick={closeMobileMenu}>
                    <a href="" className="sign-up">SIGN-UP</a>
                  </li> */}
              </ul>
              <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <AiOutlineClose className="menu-icon" />
                    ) : (
                    <FaBars className="menu-icon" />
                )}
              </div>
          </div>
      </div>         
      </>
  )
}

export default NewNav