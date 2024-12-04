// src/app/public/layout.tsx

import { ReactNode } from "react";
import Navbar from "@/components/Navbar"; // Simple navbar for public pages

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
      <main>
        {children}
        <Navbar />
      </main>
  );
};

export default PublicLayout;
