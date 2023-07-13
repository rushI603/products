"use client"

import like from '../assets/like.svg'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Rating } from '@mui/material'
import Loading from './Loading'
import redlike from '../assets/liked.svg'

const Products = () => {
    const [products, setProducts] = useState([])
    const [liked,setLiked] = useState({})
    const load = async ()=> {
        const url = "https://fakestoreapi.com/products";
        fetch(url).
        then( responsive=> responsive.json()).then(
            (json)=>{
                setProducts(json)
            }
        )
    }
    useEffect(()=>{
        load(); 
    },[])
    useEffect(()=>{
        products.forEach(({id})=>{
            console.log(id)
            setLiked(prev=> { return {...prev, [id]:id%3?0:1}})
        })
    },[products])
    return products.length != 0 ? (
        
        <div className="flex justify-center items-center">
            <div className='p-7 grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-[15px]'>
                {products && 
                    products.map(({id, image,title,price,rating})=>(
                        <div className='relative rounded-lg w-[300px] flex flex-col justify-center items-center'>
                            <div className='absolute top-4 left-4' onClick={()=>setLiked({...liked,[id]:!liked[[id]]})}>
                                <Image
                                className='rounded-full'
                                width={15}
                                height={15}
                                src={liked[id]?redlike:like}
                                alt='like'
                                />
                            </div>
                            <div className="image pt-4 w-[200px] h-[200px]">
                                <Image
                                    className='bg-[#ffffff] mark border-2 w-full h-full rounded-lg aspect-[4/5]  object-contain'
                                    width={150}
                                    height={150}
                                    src={image}   
                                    alt='product image'                     
                                />
                            </div>
                            <div className="flex gap-4 pt-[20px] px-[50px]">
                                <div className='font-bold text-[15px]'>{title.slice(0,26)}...</div>
                                <div className='font-bold text-[15px]'><sup>$</sup>{Math.floor(price)}{price%1==0?<sup>.00</sup>:<sup >{(price+"").substring((price+"").indexOf('.'))}</sup>}</div>
                            </div>
                            
                            <div className="flex gap-4 py-[10px] px-[50px] flex-col relative items-start w-full  ">
                                <Rating className='rating absolute left-[-20px] scale-75' data-cell={rating.count} name="read-only"  value={rating.rate} />
                                <a href="#" className='text-[#97bf0d] border-2 rounded-full p-1 text-sm'>Add to cart</a>

                            </div>
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
