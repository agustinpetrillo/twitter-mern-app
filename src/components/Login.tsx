import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

export default function Login() {
  const onSubmit = () => {};
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full min-h-screen bg-slate-900/60">
      <div className="flex flex-col items-center max-w-lg p-10 space-y-3 bg-black rounded-lg">
        <div className="flex items-center justify-between w-full mb-3">
          <h1 className="text-xl font-semibold">Login</h1>
          <AiOutlineClose size={20} color="white" className="cursor-pointer" />
        </div>
        <form className="flex flex-col gap-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 text-black rounded-md outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-2 mb-3 text-black rounded-md outline-none"
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