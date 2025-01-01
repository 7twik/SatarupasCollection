"use client";
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Button } from '../../components/ui/button'
import Loading from '../components/Loading'
import { useState } from 'react';



export function ItemCard({ title, category, img, description, price }) {
    const [loading, setLoading] = useState(false)
    const deleteItem = async () => {
        setLoading(true)
        await fetch('/api/item', {
            method: 'DELETE',
            body: JSON.stringify({ title: title }),
            headers: {
                'Content-Type': 'application/json',
            },

        })
        setLoading(false)
        window.location.reload();
    }
  return (
    <Card className="overflow-hidden">
        {loading && <Loading />}
      <div className="relative h-48 w-full">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
          <Badge variant="secondary">{category}</Badge>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-bold">${price}</span>
      </CardFooter>
      <Button className="w-full" onClick={deleteItem}>Delete</Button>
    </Card>
  )
}

