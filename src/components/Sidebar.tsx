"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { BsTwitter } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { Sidebar as SideNavbar } from "@/utils/data";
import SidebarIcons from "./SidebarIcons";

export default function Sidebar() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <nav>
      <div className="flex flex-col items-center lg:items-start">
        <BsTwitter
          size={28}
          color="white"
          className="m-auto mb-4 cursor-pointer"
          onClick={() => router.push("/home")}
        />
        {SideNavbar.map((items) => (
          <SidebarIcons
            key={items.name}
            name={items.name}
            href={items.href}
            icon={items.icon}
          />
        ))}
        {session && (
          <SidebarIcons
            onClick={() => signOut()}
            icon={BiLogOut}
            name="Logout"
            href="/login"
          />
        )}
        {session ? (
          <button className="flex items-center justify-center w-3/4 p-4 m-auto mt-2 text-xl transition-all rounded-full cursor-pointer bg-sky-500 hover:bg-opacity-80">
            Tweet
          </button>
        ) : (
          <Link
            href="/login"
            className="flex items-center justify-center w-3/4 p-4 m-auto mt-2 text-xl transition-all rounded-full cursor-pointer bg-sky-500 hover:bg-opacity-80"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
