import React from 'react';
import firstImage from '../assets/image_1.jpg';
// import secondImage from '../assets/image_2.jpg'
// import thirdImage from '../assets/image_3.jpg'


const Slider = () => { 



    const backImage = firstImage;

  return (
    <div className='slider'>
      <img src={firstImage} alt={backImage}/>
     </div>

  )
  }

  export default  Slider;