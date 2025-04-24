// src/app/api/profile/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email || !session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const name = formData.get("name") as string;
  const bio = formData.get("bio") as string;
  const location = formData.get("location") as string;
  const imageFile = formData.get("image") as File | null;

  let imageUrl: string | undefined = undefined;

  if (imageFile) {
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    imageUrl = `data:${imageFile.type};base64,${buffer.toString("base64")}`;
  }

  // ✅ Update user (name + optional image)
  const updatedUser = await prisma.user.update({
    where: { email: session.user.email },
    data: {
      name,
      ...(imageUrl && { image: imageUrl }),
    },
  });

  // ✅ Update or create profile
  await prisma.profile.upsert({
    where: { userId: session.user.id },
    update: { bio, location },
    create: {
      userId: session.user.id,
      bio,
      location,
    },
  });

  return NextResponse.json(updatedUser);
}


