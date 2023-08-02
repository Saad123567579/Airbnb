import { NextResponse } from "next/server";
import getCurrentUser from "../../actions/getCurrentUser";
import prisma from "../../lib/prismadb";

export async function POST(request) {
    const currentUser = await getCurrentUser();
    if (!currentUser) return NextResponse.error();
    const body = await request.json();

    const { title, description, price, guests, rooms, toilets, category, image, country } = body;
    const listing = await prisma.listing.create({
        data: {
            title,
            description,
            price: parseInt(price, 10),
            guestCount:guests,
            roomCount:rooms,
            bathroomCount:toilets,
            category,
            imageSrc:image,
            locationValue:country,
            userId: currentUser.id
        }

    })
    return NextResponse.json(listing);



}
