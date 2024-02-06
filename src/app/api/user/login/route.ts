import {connect} from "@/dbconfig/dbconfig";

import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connect();


export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();

        const{email,password}=reqBody;
        console.log(reqBody);

        const user=await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"User does not  exists"},{status:400});

        }

        const validPassword=await bcryptjs.compare(password,user.password);
        if(!validPassword)
        {
            return NextResponse.json({error:"Invalid password"},{status:400})

        }
         

        const tokenData={
            id:user._id,
            username:user.username,
            email:user.email
        }

        const token =await jwt.sign(tokenData,process.env.JWT_SECRET_KEY!,{expiresIn:"1h"})

        

       
        const resp=NextResponse.json({
            message:"login succesfully",
            success:true,
          

        })
        resp.cookies.set("token",token,{
            httpOnly:true,
        })
        return resp;

        
    } catch (error:any) {
        return NextResponse.json({error:error.message},
        {status:500})
        
    }
}