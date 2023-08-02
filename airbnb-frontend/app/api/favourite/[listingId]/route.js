import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/lib/prismadb";

export async function GET(request, params) {
  try {
    const currentUser = await getCurrentUser();
    const listingId = params.params.listingId;

    if (!currentUser) {
      return NextResponse.json("User not authenticated");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
    });

    if (!user) {
      return NextResponse.json("User not found");
    }

    // Check if listingId already exists in favoriteIds to avoid duplicates
    if (!user.favoriteIds.includes(listingId)) {
      const favoriteIds = [...user.favoriteIds, listingId];

      const updatedUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          favoriteIds: favoriteIds,
        },
      });

      return NextResponse.json("done");
    } else {
      return NextResponse.json("Listing already in favorites");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json("An error occurred");
  }
}


