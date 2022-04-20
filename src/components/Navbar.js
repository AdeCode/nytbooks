import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import './navbar.css'
import { IconContext } from 'react-icons'

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false)

  const showSideBar = () => {
      setSideBar(!sideBar)
  }
  return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
          <div className='navbar'>
              <Link to='#' className='menu-bars'>
                  <FaIcons.FaBars onClick={showSideBar}/>
              </Link>  
          </div>           
            
              <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                  <ul className='nav-menu-items'>
                    <li className='navbar-toggle' onClick={showSideBar}>
                        <Link to='/books' className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>                       
                    </li>
                    <li className='nav-text'>                        
                        <Link to='/' className='menu-bars'>
                            <AiIcons.AiFillHome/>
                            <span>Home</span>
                        </Link>
                      </li>
                      <li className='nav-text'>
                        <Link to='/books' className='menu-bars'>
                            <span><AiIcons.AiOutlineClose/>Books</span>
                        </Link>                       
                      </li>
                      <li className='nav-text'>                        
                        <Link to='/about' className='menu-bars'>
                            <span><AiIcons.AiFillAlert/>About</span>
                        </Link>
                      </li>
                  </ul>
              </nav>
        </IconContext.Provider>
      </>
  )
}
