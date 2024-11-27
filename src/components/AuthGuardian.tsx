// src/components/AuthGuardian.tsx
"use client";

import { useEffect, ReactNode, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface AuthGuardianProps {
  children: ReactNode;
}

const AuthGuardian: React.FC<AuthGuardianProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const [isMounted, setIsMounted] = useState(false); // Track whether the component is mounted
  const router = useRouter();

  useEffect(() => {
    // Set to true after component is mounted on the client side
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || status === "loading") return; // Don't do anything until the component is mounted and session is not loading
    if (!session) {
      router.push("/auth/prihlasenie")/*.catch((err) => console.error("Router push error:", err))*/;
    }
  }, [isMounted, session, status, router]);

  // Show loading state if session is still loading or user is not authenticated
  if (status === "loading" || !session) {
    return <div>Loading...</div>;
  }

  return <>{children}</>; // Render children if authenticated
};

export default AuthGuardian;