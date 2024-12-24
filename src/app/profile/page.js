'use client'

import { useState, useEffect, Suspense } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import Profileform from './Profileform';
import Profiledisplay from './Profiledisplay';
import PastOrders from './PastOrders';
import Cart from './Cart';
import { useUser } from '@auth0/nextjs-auth0/client';
import { StateProvider } from '../data/Context';
import Loading from '../components/Loading';
export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
    const { user, error, isLoading } = useUser();

  const [count, setCount] = useState(0);
  useEffect(() => {

        if(!user && !isLoading)
        {
            window.location.replace('/');
        }
    async function loadUserData() {
        if(isLoading)
        {
            return;
        }
        const em=await user.email;
      const data = await fetch('/api/user?email='+em).then((res) => res.json());
      console.log(data);
      if(data.data.length>0)
        setUserData(data.data);

      setLoading(false);
    }
    loadUserData();
  }, [isLoading,count]);

  const handleProfileSubmit=()=>{
    setCount(count+1);
  }

  if (isLoading||loading) {
    return <Loading />;
  }

  return (
    <StateProvider>
      
    <div className="min-h-screen bg-white text-purple-800 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Profile Page</h1>
        {!userData?
        <Profileform onSubmit={handleProfileSubmit} />
          :
        <Tabs defaultValue="profile" className="w-full">  
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="cart">Cart</TabsTrigger>
            <TabsTrigger value="orders">Past Orders</TabsTrigger>

          </TabsList>
          <TabsContent value="profile" className="mt-4">
              <Profiledisplay userData={userData} />
          </TabsContent>
          <TabsContent value="cart" className="mt-4">
            <Cart userData={userData} />
          </TabsContent>
          <TabsContent value="orders" className="mt-4">
            <PastOrders />
          </TabsContent>
        </Tabs>}
      </div>
    </div>
    </StateProvider>
  );
}

