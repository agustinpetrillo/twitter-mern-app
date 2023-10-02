import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export const Sidebar = [
  {
    name: "Home",
    href: "/",
    icon: BsHouseFill,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: BsBellFill,
  },
  {
    name: "Profile",
    href: "/users/",
    icon: FaUser,
  },
];
