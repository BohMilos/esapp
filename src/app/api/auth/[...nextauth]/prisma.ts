// src/app/api/auth/[...nextauth]/prisma.ts

// Create a single instance of Prisma Client and export it so that it can be used by NextAuth https://www.prisma.io/docs/guides/nextjs/next-auth
import { PrismaClient } from "@prisma/client"
 
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
 
export const prisma = globalForPrisma.prisma || new PrismaClient()
 
// In development, reassign the Prisma Client instance to the global so that it can be reused across different requests
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
