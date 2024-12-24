'use client'

import { useState, useEffect, Suspense } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import AllOrder from './AllOrder';
import AllItem from './AllItem';
import ItemForm from './ItemForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
export default function ProfilePage() {
    const [loading, setLoading] = useState(true);
    const { user, error, isLoading } = useUser();

  useEffect(() => {

        if(!user && !isLoading)
        {
            window.location.replace('/');
        }
        if(user)
        {
            if(user.email!=="07twik@gmail.com")
            {
                window.location.replace('/');
            }
            setLoading(false);
        }
    }, [isLoading]);

  
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
    {/* <AddItem />
    <AllItem /> */}
    
    </>
  );
}

