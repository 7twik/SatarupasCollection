"use client";
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import AllOrder from './AllOrder';
import AllItem from './AllItem';
import ItemForm from './ItemForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
export default function ProfilePage() {
    const [loading, setLoading] = useState(true);
    
    async function kind(){
      const user=await fetch('/api/kinde').then((res) => res.json());
      console.log(user);
      const us=await user.user;
        
        setLoading(false);
      }

  useEffect(() => {

       kind();
    }, []);

  
  return (
    <>
    {loading && <Loading />}
    <div className="min-h-screen bg-white text-purple-800 p-4 md:p-8">
    <Tabs defaultValue="profile" className="w-full">  
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">All Orders</TabsTrigger>
            <TabsTrigger value="cart">All Items</TabsTrigger>
            <TabsTrigger value="orders">Add Items</TabsTrigger>

          </TabsList>
          <TabsContent value="profile" className="mt-4">
              <AllOrder />              
          </TabsContent>
          <TabsContent value="cart" className="mt-4">
              <AllItem />
          </TabsContent>
          <TabsContent value="orders" className="mt-4">
              <ItemForm />
          </TabsContent>
        </Tabs>
        </div>
    
    </>
  );
}

