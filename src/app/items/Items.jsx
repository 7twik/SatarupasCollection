'use client'

import { useState } from 'react'
import ItemCard from '../components/Itemcard'
import { Button } from '../../components/ui/button'
import Data from '../data/ItemData.js'


const categories = ["all", ...new Set(Data.map(item => item.category))]

export default function Items() {
  const [filter, setFilter] = useState("all")

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
            
              {filteredItems.map((item, index) => (
                <ItemCard key={index} id={item._id} img={item.img} category={item.category} title={item.title} price={item.price} desc={item.desc} />
              ))}
              
            </div>
            
        </div>
       
      </div>
    </section>
  )
}