import HeroCard from './HeroCard';

export default function Hero() {
  return (
    <section className="w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            O sistema definitivo para
            <span className="text-green-500"> Personal Trainers</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            Gerencie alunos, agenda, treinos e evolução física em um único lugar.
            Plataforma SaaS moderna, rápida e feita para profissionais de educação física.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-2xl bg-green-500 text-white font-semibold hover:bg-green-600 shadow-lg shadow-green-500/30">
              Criar conta grátis
            </button>
            <button className="px-8 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900">
              Ver demonstração
            </button>
          </div>
        </div>
        <HeroCard />
      </div>
    </section>
  );
}