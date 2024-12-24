import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUser } from '@auth0/nextjs-auth0/client';


 function ProfileForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
    const { user, error, isLoading } = useUser();
    
  const handleSubmit = async(e) => {
    if(!isLoading&& !user)
    {
        window.location.replace('/');
    }
    var email=user.email;
    e.preventDefault();
    await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, phoneNumber }),
    });
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h1 className='text-red-600'> FILL CAREFULLY YOU CANNOT CHANGE LATER !</h1>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Save Profile</Button>
    </form>
  );
}

export default ProfileForm;