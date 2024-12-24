import Image from 'next/image';
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone,User } from "lucide-react";

import { useUser } from '@auth0/nextjs-auth0/client';
function Profiledisplay({ userData }) {
  const { user, error, isLoading } = useUser();
  useEffect(() => {
    console.log(userData[0].Username,userData[0].Phone);
    console.log(user)
  }, [userData,isLoading]);
  return (
    <Card className="w-full max-w-md mx-auto">
    <CardContent className="p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <Avatar className="w-24 h-24 border-2 border-primary/10">
            <AvatarImage 
              src={user.picture} 
              alt="Profile Picture"
              className="object-cover"
            />
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