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
      console.log(us.email);
        if(us!==null&&us.email!==""&&us.email!=="07twik@gmail.com"&&us.email!=="satarupawork18@gmail.com"&&us.email!=="satarupadas106@gmail.com"&&us.email!=="dassatarupa237@gmail.com"&&us.email!=="tupadas18@gmail.com")
        {
          console.log("Not Admin");
          window.location.href = "/";
        }
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

