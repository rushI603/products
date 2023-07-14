import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import user from '../assets/user.svg'
import cart from '../assets/cart.svg'

const Navbar = () => {
  
  return (
    <div className='flex p-4 justify-between'>
      <div className="logo flex gap-2">
        <Image
          width={30}
          height={30}
          src={logo}
          alt='logo'
        />
        <span className='text-[#00a096]'>SN</span><span className='text-[#97bf0d]'> Silos</span>
      </div>
      <div className='flex gap-x-4'>
        <div className='text-[#00a096] text-[15px]'>
          <Image
            className='inline'
            width={20}
            height={20}
            src={user}
          />
          Account</div>
        <div className='text-[#00a096] text-[15px]'>
          <Image
            className='inline'
            width={20}
            height={20}
            src={cart}
          />
          Cart
        </div>
      </div>
    </div>
  )
}

export default Navbar
