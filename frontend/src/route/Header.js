import React from 'react'
import '../style/layout.css'

const Header = () => {
  return (
    <div className='header'>
        <h1 className='logo'>
            YnDial
        </h1>
        <nav className='sections'>
            <h2>HOMMES</h2>
            <h2>FEMMES</h2>
            <h2>COLLECTIONS</h2>
            <h2>MARQUES</h2>
            <h2>BLOG</h2>
        </nav>
        <nav className='navPlus'>
            <h3>recherche</h3>
            <h3>compte</h3>
            <h3>favoris</h3>
        </nav>
    </div>
  )
}

export default Header