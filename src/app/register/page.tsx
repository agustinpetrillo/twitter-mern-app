"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

export default function Register() {
  const [userRegister, setUserRegister] = useState<UserRegister>({
    email: "",
    password: "",
    name: "",
    username: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      await axios.post("/api/register", {
        email: userRegister.email,
        password: userRegister.password,
        name: userRegister.name,
        username: userRegister.username,
      });

      toast.success("Account created.");

      signIn("credentials", {
        email: userRegister.email,
        password: userRegister.password,
      });

      router.push("/");
    } catch (error) {
      toast.error("Something went wrong.");
    }

    setIsLoading(false);
  };

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full min-h-screen bg-slate-900/60">
      <div className="flex flex-col items-center max-w-lg p-10 space-y-3 bg-black rounded-lg">
        <div className="flex items-center justify-between w-full mb-3">
          <h1 className="text-xl font-semibold">Register</h1>
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
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setUserRegister((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            name="name"
            className="p-2 text-black rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setUserRegister((prevState) => ({
                ...prevState,
                username: e.target.value,
              }))
            }
            name="username"
            className="p-2 text-black rounded-md outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setUserRegister((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
            name="email"
            className="p-2 text-black rounded-md outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setUserRegister((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
            name="password"
            className="p-2 mb-3 text-black rounded-md outline-none"
          />
          <button className="p-4 transition-all bg-blue-500 rounded-full hover:bg-opacity-70">
            Register
          </button>
        </form>
        <div className="flex gap-2 text-xs">
          <p className="text-gray-400">Already have an account?</p>
          <Link href="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
