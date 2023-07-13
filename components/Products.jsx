"use client"

import like from '../assets/like.svg'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Rating } from '@mui/material'
import axios from 'axios'
import Loading from './Loading'
import redlike from '../assets/liked.svg'

const Products = () => {
    const [products, setProducts] = useState([])
    const [liked, setLiked] = useState([])
    const load = async ()=> {
        const url = "https://fakestoreapi.com/products";
        const {data} = await axios.get(url)
        setProducts(data)
    }
    useEffect(()=>{load()},[])
    return products.length != 0 ? (
        
        <div className="flex justify-center items-center">
            <Filters/>
            <div className='p-7 grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-[15px]'>
                {products && 
                    products.map((item)=>(
                        <div className='relative rounded-lg w-[300px] flex flex-col justify-center items-center'>
                            <div className='absolute top-4 left-4'>
                                <Image
                                className='rounded-full'
                                width={15}
                                height={15}
                                src={item.id%3?like:redlike}
                                alt='like'
                                />
                            </div>
                            <div className="image pt-4 w-[200px] h-[200px]">
                                <Image
                                    className='bg-[#ffffff] mark border-2 w-full h-full rounded-lg aspect-[4/5]  object-contain'
                                    width={150}
                                    height={150}
                                    src={item.image}   
                                    alt='product image'                     
                                />
                            </div>
                            <div className="flex gap-4 pt-[20px] px-[50px]">
                                <div className='font-bold text-[15px]'>{item.title.slice(0,26)}...</div>
                                <div className='font-bold text-[15px]'><sup>$</sup>{Math.floor(item.price)}{item.price%1==0?<sup>.00</sup>:<sup >{(item.price+"").substring((item.price+"").indexOf('.'))}</sup>}</div>
                            </div>
                            
                            <div className="flex gap-4 py-[10px] px-[50px]">
                                <Rating className='rating scale-75 w-full ' data-cell={item.rating.count} name="read-only"  value={item.rating.rate} />
                                <div className="category ">{item.category.includes("clothing")?<div className='text-[#b03131]'>Clothing</div>:(item.category.includes("jewelery")?<div className='text-[#d2997e]'>Jewelery</div>:<div className='text-[#b164fa]'>Electronics</div>)}</div>
                            </div>
                            <a href="#" className='bg-[#97bf0d] rounded-full p-1 text-sm'>Add to cart</a>
                            
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
    :(
        <div className="flex  h-100vh justify-center items-center">
            <Loading />
        </div>
    )
}

export default Products
