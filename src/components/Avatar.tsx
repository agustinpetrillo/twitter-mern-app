import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function Avatar({ userId }: AvatarProps) {
  const { data } = useCurrentUser(userId);
  const router = useRouter();

  console.log(data);

  const goToClickedProfile = async (e: any) => {
    e.stopPropagation();

    router.push(`/api/users/${userId}`);
  };

  return (
    <div className="">
      <Image
        src={data || "/images/profile-without-image.png"}
        alt={data}
        height={50}
        width={50}
        className="object-cover transition-all rounded-full cursor-pointer hover:opacity-90"
        onClick={(e) => goToClickedProfile(e)}
      />
    </div>
  );
}
