"use client";
import React from 'react'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
const page = () => {
  const router=useRouter();
  const handlec= async()=>{
    try {
      await axios.get("/api/user/logout")
      toast.success("logout successfully")
      router.push("/login");
    } catch (error) {
      
    }

  }
  return (
    <div>
      <h1>profile</h1>

      <button className=' bg-orange-400 hover:bg-amber-600 py-2px-4 rounded' onClick={handlec}>
        Logout
      </button>
    </div>

  )
}

export default page
