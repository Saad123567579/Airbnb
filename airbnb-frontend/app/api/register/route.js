import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';


export async function POST(req,res){
 const body = await req.json();
 const {email , password, name} = body;
 const hashedPassword = await bcrypt.hash(password,process.env.PASS_KEY);
 const user = await prisma.user.create({
    email,name,hashedPassword
 })
 return NextResponse.json(user);
}