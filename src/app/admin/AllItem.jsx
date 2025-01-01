"use client";
import { useEffect, useState } from "react";
import { ItemCard } from "./ItemCard";
import Loading from "../components/Loading";

export default function AllItem() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const getData=async()=>{
        const response = await fetch('/api/item');
        const data = await response.json();
        setItems(data.data);
        setLoading(false);
    }
    useEffect(() => {
        getData();
    }, []);

    return (
      <div className="container mx-auto px-4 py-8">
        {loading && <Loading />}
        <h1 className="text-2xl font-bold mb-6">Item List</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {(items==undefined || items.length===0) && <h1>No Items</h1>}
          {items!==undefined && items.length>0 && items.map((item, index) => (
            <ItemCard key={index} {...item} />
          ))}
        </div>
      </div>
    )
  }
  