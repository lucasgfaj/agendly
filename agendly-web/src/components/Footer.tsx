export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[1600px] mx-auto px-6 py-8 text-sm text-gray-500 dark:text-gray-400 flex flex-col md:flex-row justify-between gap-4">
        <span>© {new Date().getFullYear()} Agendly</span>
        <span>Sistema para Personal Trainers</span>
      </div>
    </footer>
  );
}