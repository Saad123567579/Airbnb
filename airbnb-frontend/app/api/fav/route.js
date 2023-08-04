import { NextResponse } from "next/server";
import prisma from "../../lib/prismadb";
import getCurrentUser from "../../actions/getCurrentUser";

export async function GET(request) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return NextResponse.json("No user found");
        }

        let favids = currentUser.favoriteIds;
        let data = [];

        for (const id of favids) {
            let x = await prisma.listing.findUnique({
                where: { id },
            });
            data.push(x);
        }

        return NextResponse.json(data);
    } catch (e) {
        console.log(e);
        return NextResponse.json("Internal Server Error");
    }
}
