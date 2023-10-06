"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Loader from "@/components/reutilizable/Loader";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function User({
  params: { username },
}: {
  params: { username: string };
}) {
  const { data, isLoading } = useCurrentUser(username);

  if (isLoading) return <Loader />;

  return (
    <div>
      <Header name="User profile" />
      <div>
        {/* <div className="min-h-0 py-2 bg-neutral-700">
          {data.coverImage && (
            <Image
              src={data.coverImage || "/images/profile-without-image.png"}
              alt={data.name}
              height={50}
              width={50}
              className="rounded-full"
            />
          )}
        </div> */}
      </div>
    </div>
  );
}
