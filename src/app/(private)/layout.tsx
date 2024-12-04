// src/app/private/layout.tsx

import { ReactNode } from "react";
import AuthGuardian from "@/components/AuthGuardian"; // Custom authentication guard

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return (
      <AuthGuardian>
        {children}
      </AuthGuardian>
  );
};

export default PrivateLayout;
