import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'


import Search from '../components/Search'
import '../style/layout.css'

const Header = () => {
  return (
    <div className='header'>
        <Link className='logo' to='/'>
            YnDial
        </Link>
        <nav className='sections'>
            <h2>HOMMES</h2>
            <h2>FEMMES</h2>
            <h2>COLLECTIONS</h2>
            <h2>MARQUES</h2>
            <h2>BLOG</h2>
        </nav>
        <nav className='navPlus'>
           
           <Search />
            
            
            <h3>compte</h3>
            <h3>favoris</h3>
        </nav>
    </div>
  )
}

export default Header