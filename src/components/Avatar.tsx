import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Loader from "./reutilizable/Loader";

export default function Avatar({ userId, big }: AvatarProps) {
  const { data } = useCurrentUser(userId);
  const router = useRouter();

  const goToClickedProfile = async (e: any) => {
    e.stopPropagation();

    router.push(`/user/${userId}`);
  };

  if (!data) return <Loader />;

  return (
    <Image
      src={data.image || "/images/profile-without-image.png"}
      alt="avatar-image"
      height={big ? 100 : 50}
      width={big ? 100 : 50}
      className="object-cover transition-all rounded-full cursor-pointer hover:opacity-90"
      onClick={(e) => goToClickedProfile(e)}
    />
  );
}
