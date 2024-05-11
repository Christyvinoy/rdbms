import React from 'react'
import logo_white from './logo_white.png'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 bg-gray-900'>
      {/*left side */}
      <div className="">
        <img className='w-16' src={logo_white} alt="logo" />
      </div>
      {/*right side*/}
      <div className="flex gap-5 items-center">
        <button className='text-white border-1 border-gray-900 w-24 h-10 rounded-md font-bold hover:bg-gray-700 '>Login</button>
        <button className='text-white border-1 border-gray-900 w-24 h-10 rounded-md font-bold hover:bg-gray-700'>Register</button>
      </div>
    </div>
  )
}

export default Navbar