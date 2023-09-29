import React from 'react'

export const Navbar = () => {

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <span>Logo</span>
      </div>
      <ul className='navbar-links'>
        {/* <li><a href='#'>Home</a></li> */}
        <li><a href='#'>About</a></li>
        <li className='dropdown'>
          <a href='#'>Products</a>
          <div className='dropdown-content'>
            <a href='#'>Scania</a>
            <a href='#'>Mercedes</a>
            <a href='#'>Patria</a>
          </div>
        </li>
        <li><a href='#'>Industries</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>News</a></li>
      </ul>
    </nav>
  )
}
