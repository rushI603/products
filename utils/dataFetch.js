import React from 'react'
import axios from 'axios';
import Image from 'next/image';
const dataFetch = async () => {
  const url = "https://fakestoreapi.com/products";
  const {data} = await axios.get(url)
  console.log(data);
  return data
}

export default dataFetch
