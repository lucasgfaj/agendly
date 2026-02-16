export default function Logo() {
  return (
    <div className="flex items-center gap-2 font-bold text-xl select-none">
      <span className="relative inline-block text-green-500">
        <span className="inline-block transition-transform duration-500 hover:rotate-6 hover:scale-110">Agendly</span>
        <span className="absolute -inset-1 blur-xl opacity-40 bg-green-400 rounded-full" />
      </span>
      <span className="text-xs sm:text-sm font-normal text-gray-500 dark:text-gray-400">Personal Trainer</span>
    </div>
  );
}