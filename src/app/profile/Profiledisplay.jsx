"use client";
import { useEffect,useState } from 'react';
import { Card, CardContent } from "../../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { Phone,User } from "lucide-react";
import Loading from '../components/Loading';

function Profiledisplay({ userData }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  async function loadUserData() {
    const user=await fetch('/api/kinde').then((res) => res.json());
    if(user.user!==null)
    { 
        setUser(user.user);
        setLoading(false);
    }
  }
  useEffect(() => {
    console.log(userData[0].Username,userData[0].Phone);
    loadUserData();
  }, []);
  return (
    <Card className="w-full max-w-md mx-auto">
      {loading && <Loading />}
    <CardContent className="p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <Avatar className="w-24 h-24 border-2 border-primary/10">
          {user!==null?
            <AvatarImage 
              src={user.picture} 
              alt="Profile Picture"
              className="object-cover"
            />
            :
            <AvatarImage 
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s"} 
              alt="Profile Picture"
              className="object-cover"
            />
          }
            <AvatarFallback>
              {userData[0].Username.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
        
        <div className="space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
            <User size={24} />
            {userData[0].Username}
          </h2>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone size={16} />
            <span>{userData[0].Phone}</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  );
}

export default Profiledisplay;