import { NextResponse } from "next/server";

import prisma from "../../../lib/prismadb";
export async function GET(request,params) {
  
  try{const id = params.params.id;
  
  const user = await prisma.user.findUnique({
    where: {
      id:id,
    },
  });
  if(!user) return NextResponse.json("no listitem found");
  return NextResponse.json(user);} catch(e){console.log(e);return NextResponse.json("an error occurred");}
}
