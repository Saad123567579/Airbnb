import { NextResponse } from "next/server";
// import prisma from "../../lib/prismadb";

import prisma from "../../../lib/prismadb";
export async function GET(request,params) {
  
  try{const id = params.params.id;
  
  const item = await prisma.listing.findUnique({
    where: {
      id:id,
    },
  });
  if(!item) return NextResponse.json("no listitem found");
  return NextResponse.json(item);} catch(e){console.log(e);return NextResponse.json("an error occurred");}
}
