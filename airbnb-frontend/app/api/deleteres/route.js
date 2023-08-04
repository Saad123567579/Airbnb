
import getCurrentUser from "../../actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "../../lib/prismadb"

export async function POST(request) {
    const body = await request.json();
    
    await prisma.reservation.delete({
        where:{id:body}
    })
    return NextResponse.json("success");

    
}
