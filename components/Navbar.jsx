import React from 'react'
import dataFetch from '@/utils/dataFetch'
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
        />
        SN Silos
      </div>
    </div>
  )
}

export default Navbar
