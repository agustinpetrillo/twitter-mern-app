"use client";

import { useRouter } from "next/navigation";
import { BsTwitter } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { Sidebar as SideNavbar } from "@/utils/data";
import SidebarIcons from "./SidebarIcons";
import Link from "next/link";

export default function Sidebar() {
  const router = useRouter();
  return (
    <nav>
      <div className="flex flex-col items-center lg:items-start">
        <BsTwitter
          size={28}
          color="white"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        {SideNavbar.map((items) => (
          <SidebarIcons
            key={items.name}
            name={items.name}
            href={items.href}
            icon={items.icon}
          />
        ))}
        <Link href="/login">
          <SidebarIcons icon={BiLogOut} name="Logout" href="" />
        </Link>
        <button className="flex items-center justify-center p-4 m-auto text-xl transition-all rounded-full cursor-pointer bg-sky-500 hover:bg-opacity-80">
          Tweet
        </button>
      </div>
    </nav>
  );
}
