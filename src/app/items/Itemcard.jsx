"use client";
import Image from 'next/image'
import { Button } from '../../components/ui/button'
import { useStateAuth } from '../data/Context.jsx'
import { useEffect } from 'react';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs';

export default function ItemCard({ id, show, category, title, price, img, desc }) {
  const { data, setData } = useStateAuth();
  useEffect(() => {

    console.log("ITEM",show);
  }, [show]);
  function additem() {
    const item = { id, category, title, price, img, desc, quantity: 1 };
    
    if (data?.length > 0) {
      const itemExists = data.some(i => i.id === id);
      if (itemExists) {
        alert("Item Already Added to Cart");
        return;
      }
    }
    const temp=[...data, item];
    setData(temp);
    localStorage.setItem("carttupa", JSON.stringify(temp));

    alert("Item Added to Cart");
  }
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-96 w-full">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-purple-600 font-semibold">{category}</div>
        <h3 className="text-lg font-bold mt-1 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{desc}</p>
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">₹{price}</div>
          <Button variant="outline" onClick={()=>{
            window.location.href="/product/"+id;
          }}>View Details</Button>
          {!show &&
          <LoginLink variant="default" className="kindecart">Add to Cart</LoginLink>}
          {show &&
          <Button variant="default" onClick={additem}>Add to Cart</Button>}
        </div>
      </div>
    </div>
  )
}