import React from 'react'
import searchIcon from '../assets/images/search.svg'

const Navbar = () => {
    
  return (
    <header className="header">
      <nav className="header__nav">
        <button className="header__nav-lang">Ru</button>
        <h1 className="header__nav-title">Заметки</h1>
        <button className="header__nav-search">
          <img src={searchIcon} alt="" />
        </button>
      </nav>
    </header>
  )
}

export default Navbar