// src/app/api/auth/[...nextauth]/route.ts

// This file is an API route and is used by NextAuth.js to handle login and register requests
import NextAuth from "next-auth";
import { authOptions } from "./authOptions";

/* The handler function is an instance of the NextAuth class and is used to handle the login and register requests
The handler function takes the authOptions object as a parameter and returns an object with the login and register functions */
const handler = NextAuth(authOptions);

/* The export statement exports the handler function as both GET and POST requests
This is necessary because the NextAuth library expects the handler function to be exported as both GET and POST requests */
export { handler as GET, handler as POST };
