export default function Header({ name }: HeaderProps) {
  return (
    <div className="p-5 border-b border-neutral-800">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">{name}</h1>
      </div>
    </div>
  );
}
