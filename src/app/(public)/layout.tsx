// src/app/public/layout.tsx

// Public layout component
import { ReactNode } from "react";
import Navbar from "@/components/Navbar"; // Simple navbar for public pages

interface PublicLayoutProps {
  // Content of the page
  children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
      <main>
        {/* Render the content of the page */}
        {children}
        {/* Render the navbar at the bottom of the page */}
        <Navbar />
      </main>
  );
};
export default PublicLayout;
