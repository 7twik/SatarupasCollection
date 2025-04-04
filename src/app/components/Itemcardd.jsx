import Image from 'next/image'
import { Button } from '../../components/ui/button'


export default function ItemCardd({ id, category, title, price, img, desc }) {
  return (
    <div className="bgcard w-[450px] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <span className="text-sm text-purple-600 font-semibold ">{category}</span>
        <h3 className="text-lg font-bold mt-1 mb-2 text-white">{title}</h3>
        <p className=" text-sm mb-4 line-clamp-2 text-gray-300">{desc}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold  text-gray-300">₹{price}</span>
          <Button variant="outline" onClick={()=>{
            window.location.href="/product/"+id;
          }}>View Details</Button>
        </div>
      </div>
    </div>
  )
}