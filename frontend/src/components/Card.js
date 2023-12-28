import React from 'react'
import { Link } from 'react-router-dom'

export default function Card( {product}) {
  return (
    <div className='cardProduct'>
        <Link className='top' to={`/product/${product._id}`}>
            <span className='fav'>coeur</span>
            <img src={product.images[0].url} alt={product.title}/>
        </Link>
        <div className='bot'>
            <p className='title'>{product.title}</p>
            <span className='price'>${product.price}</span>
        </div>
    </div>
  )
}
    