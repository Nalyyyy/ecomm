import React from 'react'

export default function Card( {title, price}) {
  return (
    <div className='cardProduct'>
        <div className='top'>
            <span className='fav'>coeur</span>
            <image/>
        </div>
        <div className='bot'>
            <p className='title'>{title}</p>
            <span className='price'>${price}</span>
        </div>
    </div>
  )
}
    