import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import ProductServices from './../../Services/ProductServices'

ProductServices()

const Header = () => {
  return (
    <nav className='header'>
      <Link to='/' className='header__logo'> LOGO </Link>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <Link to='/' className='header__item-link header__item-link--is-active'> Home </Link>
        </li>
        <li className='header__list-item'>
          <Link to='/' className='header__item-link header__item-link--is-active'> Login </Link>
        </li>
        <li className='header__list-item'>
          <Link to='/' className='header__item-link header__item-link--is-active'> Signup </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
