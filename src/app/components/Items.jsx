"use client";

import { useEffect, useState } from 'react'
import ItemCard from './Itemcard'
import { Button } from '../../components/ui/button'
import Data from '../data/ItemData.js'

export default function Items() {
  const [categories,setcategories] = useState(["all"])
  const [filter, setFilter] = useState("all")
  const [show, setShow] = useState(null)
  async function loadUserData() {
    console.log("loading user data IS RUNNING")
    const user=await fetch('/api/kinde').then((res) => res.json());
    console.log(user);
    var em="";
    if(user!==null&&user.user!==null)
      em=await user.user.email;
    console.log("EMAIL IN ITEMS.JSX",em);
    const data = await fetch('/api/user?email='+em).then((res) => res.json());
    console.log(data);
    if(data.data.length>0)
      setShow(data.data);

  }
  const [totalItems, setTotalItems] = useState([])
  async function loadItems() {
    const items = await fetch('/api/item').then((res) => res.json());
    console.log(items);
    setTotalItems(items.data);
    const uniqueCategories = [...new Set(items.data.map(item => item.category))];
    setcategories(["all", ...uniqueCategories]);
  }
  useEffect(() => {
    loadItems();
      loadUserData();
  }, []);
  const filteredItems = filter === "all" 
    ? totalItems
    : totalItems.filter(item => item.category === filter)

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
              className="capitalize mb-5"
            >
              {category.substring(0, 10)}
            </Button>
          ))}
        </div>
        </div>
          <div className='flex justify-center'>
            <div className="md:w-[90vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* ONLY SHOW FIRST 6 ITEMS REST STAY HIDDEN */}
              {filteredItems.map((item, index) => (
                  show !== null ? (
                    <ItemCard 
                      key={index}
                      id={item.img}
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