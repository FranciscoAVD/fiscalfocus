import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-[320px_1fr] h-screen bg-gray-100">
      <Sidebar />
      {children}
    </main>
  );
}