import { NextResponse } from "next/server";

import getCurrentUser from "../../actions/getCurrentUser";
import prisma from "../../lib/prismadb";
export async function POST(request) {
    try{
        const currentUser = await getCurrentUser();
    if (!currentUser) return NextResponse.json("no user found");
    const body = await request.json();

    const { startDate,endDate,listingId,totalPrice } = body;
    const listing = await prisma.reservation.create({
        data: {
            startDate: new Date(startDate),endDate: new Date(endDate),listingId,totalPrice,userId:currentUser.id
        }

    })
    return NextResponse.json('done');
    } catch(e){console.log(e);return NextResponse.json("Internal Server Error");}

}


