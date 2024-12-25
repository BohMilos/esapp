// src/components/AuthProvider.tsx

"use client";

import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

// AuthProvider component
// This component wraps the top-level component of the application with the SessionProvider component from next-auth/react
const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    // Provide the SessionProvider component with the children as the prop children
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider
