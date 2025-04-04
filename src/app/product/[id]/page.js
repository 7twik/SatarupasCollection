"use client"
import React, { useEffect, useState } from 'react'
import Product from './Product'

const Page = ({params}) => {
  const [data,setData]=useState([])
  const getData=async()=>{
    const response = await fetch('/api/item');
    const dat = await response.json();
    const specific=dat.data.filter((item)=>item._id==params.id)[0];
    setData(specific);
  }
  useEffect(() => {
    getData();
  }
  , []);
    const {id} = params
    
  return (
    <div>
        <Product {...data} />
    </div>
  )
}

export default Page