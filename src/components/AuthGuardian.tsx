// src/components/AuthGuardian.tsx
"use client";

import { useEffect, ReactNode, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Define the props for the AuthGuardian component
interface AuthGuardianProps {
  children: ReactNode;
}

// AuthGuardian component to protect routes for authenticated users
const AuthGuardian: React.FC<AuthGuardianProps> = ({ children }) => {
  const { data: session, status } = useSession(); // Get session data and status
  const [isMounted, setIsMounted] = useState(false); // Track component mount status
  const router = useRouter(); // Get Next.js router instance

  // Set component as mounted after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Redirect to sign-in page if not authenticated
  useEffect(() => {
    if (!isMounted || status === "loading") return; // Wait for session loading and mount
    if (!session) {
      router.push("/auth/prihlasenie")/*.catch((err) => console.error("Router push error:", err))*/;
    }
  }, [isMounted, session, status, router]);

  // Render loading state or children based on authentication status
  if (status === "loading" || !session) {
    return <div>Loading...</div>; // Show loading message while session is loading
  }

  return <>{children}</>;
};

export default AuthGuardian;