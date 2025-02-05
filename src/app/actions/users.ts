// src/app/actions/users.ts

"use server";

// Import Prisma client
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

// Fetch all users
export const fetchUsers = async () => {
    try {
        const users = await prisma.user.findMany(
            { include: { profile: true } }
        );
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Could not fetch users");
    }
};

// Fetch a specific user by ID
export const fetchUserById = async (userId: string) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        return user;
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw new Error("Could not fetch user");
    }
};

// Create a new user
export const createUser = async (name: string, email: string, image: string) => {
    try {
        const user = await prisma.user.create({ data: { name, email, image } });
        return user;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Could not create user");
    }
};