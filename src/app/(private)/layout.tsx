// src/app/(private)/layout.tsx

import AuthGuard from "@/components/AuthGuard";

export const metadata = { title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava"};

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard>{children}</AuthGuard>;
}
