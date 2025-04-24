// src/app/api/profile/stats/route.ts

import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [posts, followers, following] = await Promise.all([
    prisma.post.count({ where: { userId: session.user.id } }),
    prisma.follow.count({ where: { followingId: session.user.id } }), // people who follow me
    prisma.follow.count({ where: { followerId: session.user.id } }),  // people I follow
  ]);

  return NextResponse.json({ posts, followers, following });
}

