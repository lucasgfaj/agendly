import FeatureCard from './FeatureCard';
import { CalendarCheck, Users, Dumbbell, BarChart3, ShieldCheck, Smartphone } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="w-full">
      <div className="max-w-[1600px] mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">Tudo que o Personal precisa</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <FeatureCard icon={<CalendarCheck />} title="Agenda" text="Controle total de horários e sessões." />
          <FeatureCard icon={<Users />} title="Alunos" text="Cadastro e histórico completo." />
          <FeatureCard icon={<Dumbbell />} title="Treinos" text="Treinos personalizados." />
          <FeatureCard icon={<BarChart3 />} title="Evolução" text="Acompanhe progresso físico." />
          <FeatureCard icon={<ShieldCheck />} title="Segurança" text="Dados isolados por personal." />
          <FeatureCard icon={<Smartphone />} title="Mobile" text="Use no celular ou tablet." />
        </div>
      </div>
    </section>
  );
}