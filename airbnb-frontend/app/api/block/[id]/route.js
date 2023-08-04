import prisma from "../../../lib/prismadb";
import { NextResponse } from "next/server";


export async function GET(request,params) {
    const id = params.params.id;
    const data = await prisma.reservation.findMany({
        where:{listingId:id}
    })
    return NextResponse.json(data);

    
    
}
