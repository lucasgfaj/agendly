export default function Showcase() {
  return (
    <section id="showcase" className="w-full bg-gray-50 dark:bg-gray-950">
      <div className="max-w-[1600px] mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold">Sua plataforma completa de gestão fitness</h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400">
            O Agendly foi desenvolvido para centralizar toda a operação do personal trainer em um único ambiente digital.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A gestão de alunos permite visualizar rapidamente histórico, frequência, observações e evolução física.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Tudo isso com uma interface moderna, responsiva e pensada para uso prático no dia a dia do treinador.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 blur-3xl opacity-30 rounded-3xl" />
          <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-xl">
            <div className="h-56 flex items-center justify-center text-gray-400">
              Preview do sistema
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}