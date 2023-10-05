export default function SidebarIcons({ name, icon: Icon, href }: IconsProps) {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center p-4 transition-all rounded-full cursor-pointer lg:gap-4 hover:bg-slate-300 hover:bg-opacity-10">
        <Icon size={28} color="white" />
        <p className="hidden text-xl lg:block">{name}</p>
      </div>
    </div>
  );
}
