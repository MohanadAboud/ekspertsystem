import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </nav>
    </header>
  )
}

export default Header
