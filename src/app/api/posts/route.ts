// src/app/api/posts/route.ts

import { prisma } from "@/app/api/auth/[...nextauth]/prisma";
import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const caption = formData.get("caption");
    const userId = formData.get("userId");

    // ✅ Type checking for inputs
    if (typeof userId !== "string") {
      return NextResponse.json(
        { message: "User ID is required." },
        { status: 400 }
      );
    }

    // ✅ Create the new post
    const newPost = await prisma.post.create({
      data: {
        userId,
        caption: typeof caption === "string" ? caption : "",
        tags: [], // Default empty tags
      },
    });

    // ✅ Process and upload images
    const files = formData.getAll("images").filter((file): file is File => file instanceof File);
    const imageRecords = [];

    for (let i = 0; i < files.length; i++) {
      const image = files[i];

      // ✅ Convert image to buffer and upload to Vercel Blob
      const buffer = await image.arrayBuffer();
      const { url } = await put(image.name, buffer, { access: "public" });

      // ✅ Save image record to PostImage
      const postImage = await prisma.postImage.create({
        data: {
          postId: newPost.id,
          imageUrl: url,
          order: i,
        },
      });

      imageRecords.push(postImage);
    }

    // ✅ Optionally return full post with images
    const fullPost = await prisma.post.findUnique({
      where: { id: newPost.id },
      include: {
        user: true,
        images: true,
        comments: { include: { user: true } },
        likes: true,
      },
    });

    return NextResponse.json({ post: fullPost });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { message: "An error occurred while creating the post." },
      { status: 500 }
    );
  }
}

