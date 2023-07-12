import React from 'react'
import Image from 'next/image'
import homeImage from '../assets/homeImage.png'

const Home = () => {
  return (
    <div className='flex overflow-hidden w-full h-fit flex-bottom h-90vh border-2 border-[#FF0000] items-end justify-between'>
      <div className="relative">
        <div className='w-[700px] rounded-full border-2 absolute h-[700px] top-[-700px] left-[-100px]'></div>
        <div className='w-[500px]  rounded-full border-2 absolute h-[500px] top-[-30px]  left-[-50px]'></div>
        <div className='bg-[#e5e7eb] w-[400px] h-[400px] absolute top-8 rounded-full'></div>
        <Image
        src={homeImage}
        className='h-70vh absolute object-cover object-left'
        />
      </div>
      <div className='text-[64px] '>Fashion up<br/>your look</div>

    </div>
  )
}

export default Home
