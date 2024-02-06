"use client";
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios'
import Link from "next/link"
import { useRouter } from "next/navigation";      
// import router from 'next/router';
import toast from 'react-hot-toast';


const page = () => {
    const router=useRouter();
    const [buttondis,setbuttondis]=useState(false);
    const [loading,setLoding]=useState(false);

    const [user, setuser] = useState(
        {
           
            email: "",
            password: ""
        }

    )
    const  handlesubmit = async()=>{
        try {
            setLoding(true);
            console.log(user)
           const resp= await axios.post("api/user/login",user);
           console.log("login success",resp.data)
           router.push("/Progfile");
            
           } catch (error:any) {
            toast.error(error.message);
            console.log("Login failed ",error.message);
            
           }finally{
            setLoding(false);
           }
    
    
    


    }
    useEffect(()=>
    {
        if(user.email.length>0&&user.password.length>0)
        {
            setbuttondis(false);
        }
        else{
            setbuttondis(true);
        }

    },[user]);
    return (
        <div className='flex flex-col h-[100vh] w-[100%] items-center roune justify-center bg-slate-200' >
            <h1 className='pb-10 text-3xl font-black text-sky-400'>{loading?"Processing":"Login"}</h1>
            <div className='p-2 flex flex-col items-center rounded-3xl justify-center h-[35vh] w-[30%] shadow shadow-blue-500/90 bg-slate-300' >
                



                <input className='p-1 m-2 rounded-md text-black' type="text"
                    value={user.email}
                    onChange={(e) => setuser({ ...user, email: e.target.value })}

                    placeholder="Email"

                />



                <input className='p-1 m-2 rounded-md text-black' type="password"
                    value={user.password}
                    onChange={(e) => setuser({ ...user, password: e.target.value })}

                    placeholder="Password"

                />
                <button className='p-1 m-2 rounded-md bg-lime-600' onClick={handlesubmit}> {buttondis?"NO LOGIN":"Login"}</button>
                <Link  className='' href="/signup">Create Account</Link>


            </div>


        </div>
    )
}

export default page
