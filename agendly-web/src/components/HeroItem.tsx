export default function HeroItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-sm sm:text-base">
      {icon}
      <span>{children}</span>
    </div>
  );
}