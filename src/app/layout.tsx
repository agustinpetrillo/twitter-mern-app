import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Followbar from "@/components/Followbar";
import SessionProvider from "@/providers/SessionProvider";
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter",
  description: "Twitter MERN Stack application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <SessionProvider session={session}>
          <Toaster />
          <div className="container h-full max-w-6xl mx-auto xl:px-30">
            <div className="grid h-full grid-cols-4">
              <Sidebar />
              <div className="col-span-3 lg:col-span-2 border-x border-neutral-800">
                {children}
              </div>
              <Followbar />
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
