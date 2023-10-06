"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [userData, setUserData] = useState<UserLogin>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      await axios.post("/api/login", {
        email: userData.email,
        password: userData.password,
      });

      signIn("credentials", {
        email: userData.email,
        password: userData.password,
      });

      toast.success("Login successfully.");

      router.push("/home");
    } catch (error) {
      toast.error("Something went wrong");
    }

    setIsLoading(false);
  };

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full min-h-screen bg-slate-900/60">
      <div className="flex flex-col items-center max-w-md p-10 space-y-3 bg-black rounded-lg">
        <div className="flex items-center justify-between w-full mb-3">
          <h1 className="text-xl font-semibold">Login</h1>
          <Link href="/">
            <AiOutlineClose
              size={20}
              color="white"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <form
          className="flex flex-col gap-2"
          onSubmit={() => onSubmit()}
          method="POST"
        >
          <input
            type="email"
            name="email"
            onChange={(e) =>
              setUserData((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
            placeholder="Email"
            className="p-2 text-gray-200 bg-black border border-gray-600 rounded-md outline-none"
          />
          <input
            type="password"
            name="password"
            onChange={(e) =>
              setUserData((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
            placeholder="Password"
            className="p-2 mb-3 text-gray-200 bg-black border border-gray-600 rounded-md outline-none"
          />
          <button className="p-4 transition-all bg-blue-500 rounded-full hover:bg-opacity-70">
            Login
          </button>
        </form>
        <div className="flex gap-2 text-xs">
          <p className="text-gray-400">Not have an account?</p>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
