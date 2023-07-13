import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'

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
    </div>
  )
}

export default Navbar
