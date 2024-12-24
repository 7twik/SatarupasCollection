import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import OrderCard from "./OrderCard"
import { useUser } from '@auth0/nextjs-auth0/client'
import { useEffect, useState } from "react";
import Loading from "../components/Loading";


export default function PastOrders() {
  const [loading, setLoading] = useState(true)
  const { user,error,isLoading } = useUser()
  const [data, setData] = useState([])
  useEffect(() => {
    if (user) {
     getPastOrders()
      
    }
  }, [user,isLoading])
  async function getPastOrders() {

    const email=user.email;
    const res = await fetch(`/api/past?email=${email}`).then((res) => res.json());
    const ret=await res.data;
    console.log(ret);
    setData(ret);
    setLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && <Loading />}
      <h1 className="text-2xl font-bold mb-6">Past Orders</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {data.length === 0 && <p>No past orders found</p>}
        {data.length>0 && data.map((order, index) => (
          <OrderCard key={index} order={order} />
        ))}
      </div>
    </div>
  )
}