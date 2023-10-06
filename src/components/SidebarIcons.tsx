import { useRouter } from "next/navigation";

export default function SidebarIcons({
  name,
  icon: Icon,
  href,
  onClick,
}: IconsProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) return onClick();

    if (href) router.push(href);
  };

  return (
    <div className="flex items-center" onClick={() => handleClick()}>
      <div className="flex items-center justify-center p-4 transition-all rounded-full cursor-pointer lg:gap-4 hover:bg-slate-300 hover:bg-opacity-10">
        <Icon size={28} color="white" />
        <p className="hidden text-xl lg:block">{name}</p>
      </div>
    </div>
  );
}
