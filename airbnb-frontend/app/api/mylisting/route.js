import { NextResponse } from "next/server";
import prisma from "../../lib/prismadb";
import getCurrentUser from "../../actions/getCurrentUser";

export async function GET(request) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return NextResponse.json("No user found");
        }
        let listings = await prisma.listing.findMany({
            where:{userId:currentUser.id}
        })
        return NextResponse.json(listings);

        
        } catch (e) {
        console.log(e);
        return NextResponse.json("Internal Server Error");
    }
}
