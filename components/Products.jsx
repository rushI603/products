"use client"

import like from '../assets/like.svg'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Rating } from '@mui/material'
import Loading from './Loading'
import redlike from '../assets/liked.svg'
import filterImage from '../assets/filter.svg' 

const Products = () => {
    const filter = ["clothing","jewelery","men","women","electronics"]
    const [products, setProducts] = useState([])
    const [selectedFilter, setSelectedFilter] = useState({"clothing":false,"jewelery":false,"men":false,"women":false,"electronics":false})
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

    function check (category) {
        const tempFilters = Object.keys(selectedFilter);
        for (let i = 0; i < tempFilters.length; i++) {
            if(selectedFilter[tempFilters[i]])
                if(category.includes(tempFilters[i])){return true;}
        }
        return false;
    }
    useEffect(()=>{
        load(); 

    },[])
    useEffect(()=>{
        products.forEach(({id})=>{
            setLiked(prev=> { return {...prev, [id]:id%3?0:1}})
        })
    },[products])
    return products.length != 0 ? (
            
            <div className="flex justify-center flex-col items-center">
                <div className="flex justify-around pt-4 w-full sm:hidden">
                    <div className="flex gap-x-2 ">
                        {filter.map((item)=> 
                            <div className={selectedFilter[item]?"opacity-100 cursor-pointer":"opacity-50 cursor-pointer"}  onClick={()=>setSelectedFilter((prev)=>{return {...prev,[item]:!prev[item]}})}>
                                <div className='bg-[#ffffff]  text-[#97bf0d] px-2 rounded-full p-1'>
                                    {item}
                                </div>
                            </div>
                            )}
                    </div>
                    <div></div>
                    <div className='bg-[#ffffff] text-[#97bf0d] rounded-full p-1'>All Filters 
                        <Image
                            className='inline'
                            width={20}
                            height={25}
                            src={filterImage}
                            alt='filter Image'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-[15px]'>
                    {products && !Object.values(selectedFilter).includes(true) &&
                        products.map(({id, image,title,price,rating, category})=>(
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
                    {
                        products && Object.values(selectedFilter).includes(true) &&
                        products.map(({id, image,title,price,rating, category})=>(
                            check(category) ?
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
                            :
                            <div className='hidden'></div>
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
