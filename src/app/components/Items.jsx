"use client";

import { useEffect, useState } from 'react'
import ItemCard from './Itemcard'
import { Button } from '../../components/ui/button'
import Data from '../data/ItemData.js'

const categories = ["all", ...new Set(Data.map(item => item.category))]

export default function Items() {
  const [filter, setFilter] = useState("all")
  const [show, setShow] = useState(null)
  async function loadUserData() {
    console.log("loading user data IS RUNNING")
    const user=await fetch('/api/kinde').then((res) => res.json());
    console.log(user);
    var em="";
    if(user!==null)
      em=await user.user.email;
    console.log("EMAIL IN ITEMS.JSX",em);
    const data = await fetch('/api/user?email='+em).then((res) => res.json());
    console.log(data);
    if(data.data.length>0)
      setShow(data.data);

  }
  useEffect(() => {
      loadUserData();
  }, []);
  const filteredItems = filter === "all" 
    ? Data 
    : Data.filter(item => item.category === filter)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Artisan Collection</h2>
        <div className='flex justify-center'>
        <div className="grid grid-cols2 md:grid-cols-4 md:w-[30vw] space-x-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        </div>
          <div className='flex justify-center'>
            <div className="md:w-[90vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* ONLY SHOW FIRST 6 ITEMS REST STAY HIDDEN */}
              {filteredItems.slice(0, 6).map((item, index) => (
                  show !== null ? (
                    <ItemCard 
                      key={index}
                      id={item.id}
                      show={true}
                      img={item.img}
                      category={item.category}
                      title={item.title}  
                      price={item.price}  
                      desc={item.desc}
                    />
                  ) : (
                    <ItemCard
                      key={index}
                      id={item.id}
                      show={false}
                      img={item.img}
                      category={item.category}
                      title={item.title}
                      price={item.price}
                      desc={item.desc}
                    />
                  )
                ))}
              
            </div>
            
        </div>
        <div className='flex justify-center pt-6'>
            <button className='bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white font-bold py-2 px-4 rounded-full' 
                onClick={()=>{window.location.href = '/items'}}>
                Load More
            </button>
        </div>
      </div>
    </section>
  )
}