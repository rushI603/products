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
      <div className="links">
        <ul className='list-none'>
          <li className='inline px-2'>collection</li>
          <li className='inline px-2'>new</li>
          <li className='inline px-2'>brand</li>
          <li className='inline px-2'>cart</li>
          <li className='inline px-2'>orders</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
