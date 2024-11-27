// src/app/private/layout.tsx

import { ReactNode } from "react";
import Layout from "@/app/layout"; // Base layout
import AuthGuardian from "@/components/AuthGuardian"; // Custom authentication guard
import Navbar from "@/components/Navbar"; // Navbar for private pages

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <AuthGuardian>
        <main>{children}</main>
        <Navbar />
      </AuthGuardian>
    </Layout>
  );
};

export default PrivateLayout;
