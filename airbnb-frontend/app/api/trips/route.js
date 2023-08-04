
import prisma from "../../lib/prismadb";
import getCurrentUser from "../../actions/getCurrentUser";
import { NextResponse } from "next/server";


export async function GET(request) {
    // try {
        const data = [];
        const currentUser = await getCurrentUser();
        if (!currentUser) return NextResponse.json("no user found");

        const reservations = await prisma.reservation.findMany({
            where: { userId: currentUser.id },
        });
        if (!reservations || reservations.length === 0) return NextResponse.json("No reservations");

        // Use Promise.all to await all async operations inside the map function
        await Promise.all(reservations.map(async (reservation) => {
            const listing = await prisma.listing.findUnique({
                where: { id: reservation.listingId }
            });
            let obj = { reservation, listing };
            data.push(obj);
        }));

        return NextResponse.json(data);
    // } catch (e) {
    //     console.log(e);
    //     return NextResponse.json("Internal Server Error");
    // }
}
