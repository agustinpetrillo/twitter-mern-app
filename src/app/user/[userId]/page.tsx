"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Loader from "@/components/reutilizable/Loader";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Avatar from "@/components/Avatar";
import { useUserLogged } from "@/hooks/useUserLogged";
import { BiCalendar } from "react-icons/bi";

export default function User({
  params: { userId },
}: {
  params: { userId: string };
}) {
  const { data } = useCurrentUser(userId);
  const { data: currentUser } = useUserLogged();

  const joinedDate = () => {
    if (data) {
      return new Date(data.user.createdAt).getFullYear();
    }
  };

  if (!data) return <Loader />;

  return (
    <section>
      <Header name={data.user.name} />
      <div className="min-h-0 py-2 bg-neutral-700">
        {data.user.coverImage && (
          <Image
            src={data.user.coverImage || "/images/profile-without-image.png"}
            alt={data.user.name}
            height={50}
            width={50}
            className="rounded-full"
          />
        )}
      </div>
      <div className="absolute p-2">
        <Avatar big userId={userId} />
      </div>
      <div className="p-2 pb-4 border-b border-neutral-800">
        <div className="grid justify-end">
          {data.user.id === userId ? (
            <button
              className="p-4 m-auto mt-2 text-black transition-all rounded-full cursor-pointer bg-slate-200 hover:bg-opacity-80"
              onClick={() => {}}
            >
              Edit profile
            </button>
          ) : (
            <button
              className="p-4 m-auto mt-2 text-black transition-all rounded-full cursor-pointer bg-slate-200 hover:bg-opacity-80"
              onClick={() => {}}
            >
              Follow
            </button>
          )}
        </div>
        <div className="flex flex-col mt-8">
          <h5 className="text-2xl font-semibold">{data.user.name}</h5>
          <p className="text-neutral-400">@{data.user.username}</p>
        </div>
        <div className="flex flex-col mt-4">
          <p>{data.user.bio}</p>
          <div className="flex items-center gap-2 mt-4 text-neutral-500">
            <BiCalendar size={24} />
            <p>Joined {joinedDate()}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-1">
            <p>{data.user.followingIds.length}</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex items-center gap-1">
            <p>{data.user.followersCount || 0}</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
