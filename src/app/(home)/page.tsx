// src/app/(home)/page.tsx


import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
//import AuthHomeView from "@/sections/AuthHomeView";
import NonAuthHomeView from "@/sections/NonAuthHomeView";
import { redirect } from "next/navigation";

export const metadata = { title: "Domov | SnapZoška" };

export default async function Home() {
  const session = await getServerSession(authOptions);
  return session ? redirect("/prispevok") : <NonAuthHomeView />;
}


