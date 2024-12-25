// src/app/podmienky/page.tsx

// This component is used to display the terms and conditions of the application

import TCView from "@/sections/TCView";

export const metadata = { title: "Podmienky | SnapZoška" };

// This is the main function for the TermsConditions component
export default function TermsConditions() {

  // This function simply returns the TCView component
  return <TCView/>
}