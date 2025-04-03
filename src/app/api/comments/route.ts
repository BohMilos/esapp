// src/app/api/comments/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const userId = formData.get("userId") as string;
    const postId = formData.get("postId") as string;
    const content = formData.get("content") as string;

    if (!userId || !postId) {
      return NextResponse.json(
        { message: "User ID and Post ID are required." },
        { status: 400 }
      );
    }

    const newComment = await prisma.comment.create({
      data: {
        userId,
        postId,
        content,
      },
    });

    return NextResponse.json(newComment);
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { message: "Failed to create comment." },
      { status: 500 }
    );
  }
}
