"use server";

import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export async function searchUsers(query: string) {
    try {
        const users = await prisma.user.findMany({
            where: query ? {
                OR: [
                    { name: { contains: query, mode: 'insensitive' } },
                    { email: { contains: query, mode: 'insensitive' } },
                ],
            } : {},
            include: {
                profile: true,
            },
            orderBy: {
                name: 'asc'
            },
            take: 20,
        });
        return users;
    } catch (error) {
        console.error("Error searching users:", error);
        throw new Error("Failed to search users");
    }
}

export async function searchPosts(query: string) {
    if (!query) return [];
    
    try {
        const posts = await prisma.post.findMany({
            where: {
                OR: [
                    { caption: { contains: query, mode: 'insensitive' } },
                    { user: { name: { contains: query, mode: 'insensitive' } } },
                ],
            },
            include: {
                user: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
            take: 20,
        });
        return posts;
    } catch (error) {
        console.error("Error searching posts:", error);
        throw new Error("Failed to search posts");
    }
}