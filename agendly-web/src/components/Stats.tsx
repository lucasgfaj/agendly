import Stat from './Stat';

export default function Stats() {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Stat number="100%" label="Focado em Personal" />
        <Stat number="24h" label="Agenda Online" />
        <Stat number="∞" label="Alunos" />
        <Stat number="SaaS" label="Na Nuvem" />
      </div>
    </section>
  );
}