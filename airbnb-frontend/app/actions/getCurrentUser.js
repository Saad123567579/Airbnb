const { getServerSession } = require("next-auth/next");
const { authOptions } = require("../api/auth/[...nextauth]/route");
import prisma from "../lib/prismadb";
async function getSession() {
    return await getServerSession(authOptions);
}
export default async function getCurrentUser() {

    const session = await getSession();

    if (!session?.user?.email) {
        return null;
    }

    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
    });
    if (!currentUser) {

        return null;
    }

    return currentUser;

}
