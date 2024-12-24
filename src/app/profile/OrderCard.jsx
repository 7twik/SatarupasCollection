"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { useEffect } from "react"


export default function OrderCard({ order }) {
  const items= JSON.parse(order.Items)
  const date = new Date(order.createdAt).toLocaleDateString()
    useEffect(() => {
        console.log(items)
    },[]
    )
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Date: {date}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <span>{item.title}</span>
              <span className="font-semibold">Qty: {item.quantity}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

