import React, { use, useEffect, useState } from 'react'
import { useStateAuth } from '../data/Context'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Loading from '../components/Loading';
const Cart = ({userData}) => {
    const {data,setData}=useStateAuth();
    const [loading, setLoading] = useState(false);
    async function checkout(e){

        e.preventDefault();
        setLoading(true);
        var dd="";
        for(let i=0;i<data.length;i++){
            if(data[i].quantity<=0){
                alert("Quantity of "+data[i].title+" is less than 1");
                return;
            }
            dd+=data[i].title+" x "+data[i].quantity+" , ";
        }
        await handleSubmit();
        alert("Checkout Done : "+dd);
        localStorage.setItem("carttupa", JSON.stringify([]));
        setData([]);
        setLoading(false);
    }
    const handleSubmit = async() => {
        await fetch('/api/past', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email:userData[0].Email, username:userData[0].Username, phoneNumber:userData[0].Phone,items:data }),
        });
      };
  return (
    <div>
        {/* I need to show the items in a cart also a delete option to delete it from data and a input field on side of each item to show the quantity editing which can edit quantity */}
        <h1>Cart</h1>
        {loading && <Loading />}
        {data.length>0?
        <div>
            {data.map((item,index)=>(
                <div key={index} className="flex justify-between items-center border-b p-2">
                    <div className="flex items-center gap-4">
                        <Image src={item.img} alt={item.title} width={50} height={50} />
                        <div>
                            <h1>{item.title}</h1>
                            <p>${item.price}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Input type="number" value={item.quantity} onChange={(e)=>{
                            const value=e.target.value;
                            const temp=[...data];
                            temp[index].quantity=value;
                            setData(temp);
                        }} />
                        <Button onClick={()=>{
                            const temp=[...data];
                            temp.splice(index,1);
                            setData(temp);
                        }}>Delete</Button>
                    </div>
                </div>
            ))}
            <Button onClick={checkout}>Checkout</Button>
            </div>
            :<h1>No Items in Cart</h1>}
        </div>
  )
}

export default Cart