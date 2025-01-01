"use client";
import React, { useCallback, useEffect, useState } from 'react'
import { OrderCard } from './OrderCard';
import Loading from '../components/Loading';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

const AllOrder = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    async function getData() {
        const res = await fetch('/api');
        const data = await res.json();
        console.log(data);
        const d=data.data.reverse();
        setData(d);
        setLoading(false);
    }
    useEffect(() => {
        getData();
    }, []);
    const parseItems = useCallback((itemString) => {
        try {
          return JSON.parse(itemString)
        } catch (error) {
          console.error("Error parsing items:", error)
          return []
        }
      }, [])
    const [user, setUser] = useState('');
    const filteruser = async (e) => {
        setUser(e.target.value);
    }
    const filterdata = async () => {
        const res = await fetch('/api');
        const data = await res.json();
        console.log(data);
        const d=data.data.reverse();
        const filtered=d.filter((item) => item.Username === user);
        setData(filtered);
    }
    const resetData = async () => {
        await getData();
    }

  return (
    <div className="container mx-auto px-4 py-8">
        {loading && <Loading />}

      <h1 className="text-2xl font-bold mb-6">Order List</h1>
        <div className="flex flex-row ">
            <Input placeholder="Search Username" onChange={filteruser} className="mb-5 w-[50vw] mr-5" />
            <Button onClick={filterdata} className="mb-5 mr-5">Search</Button>
            <Button onClick={resetData} className="mb-5">Reset</Button>
        </div>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {data.map((order, index) => (
          <OrderCard
            key={index}
            Username={order.Username}
            Phone={order.Phone}
            Email={order.Email}
            Items={parseItems(order.Items)}
            createdAt={order.createdAt}
          />
        ))}
      </div>
    </div>
  )
}

export default AllOrder