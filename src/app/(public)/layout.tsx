// src/app/public/layout.tsx

import { ReactNode } from "react";
import Layout from "@/app/layout"; // Base layout
import Navbar from "@/components/Navbar"; // Simple navbar for public pages

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <main>{children}</main>
      <Navbar />
    </Layout>
  );
};

export default PublicLayout;
