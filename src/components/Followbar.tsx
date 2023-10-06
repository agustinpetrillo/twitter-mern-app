"use client";

import { useUsers } from "@/hooks/useUsers";
import Avatar from "./Avatar";
import Loader from "./reutilizable/Loader";

export default function Followbar() {
  const { data, error } = useUsers();

  if (error) return <p>Failed to load users.</p>;
  if (!data) return <Loader />;
  if (data.length === 0) return null;

  return (
    <div className="hidden px-6 py-4 lg:block">
      <div className="p-4 rounded-3xl bg-neutral-800">
        <h2 className="text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {data.users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-white">{user.name}</p>
                <p className="text-xl text-neutral-400">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
