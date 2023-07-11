import React from 'react'
import axios from 'axios';

const dataFetch = async () => {
  const url = "https://fakestoreapi.com/products";
  const data = await axios.get(url)
}

export default dataFetch
