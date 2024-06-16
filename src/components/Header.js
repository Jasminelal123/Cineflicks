import React from 'react'
import image from './utils/logo.png'
const Header = () => {
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30'>
      <img  className= 'w-44'src={image} alt='logo'/>
    </div>
  )
}

export default Header
