// src/app/private/layout.tsx

import { ReactNode } from "react";
import AuthGuardian from "@/components/AuthGuardian"; // Import the custom authentication guard component

// Define the props for the PrivateLayout component
interface PrivateLayoutProps {
  children: ReactNode; // The content to be displayed within the layout
}

// PrivateLayout component that wraps its children with the AuthGuardian component
const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return (
    // Render the AuthGuardian component to protect child components
    <AuthGuardian>
      {children}
    </AuthGuardian>
  );
};
export default PrivateLayout; // Export the PrivateLayout component as the default export
