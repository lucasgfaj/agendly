import { CalendarCheck, Users, Dumbbell } from "lucide-react";
import HeroItem from './HeroItem';

export default function HeroCard() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl blur-3xl opacity-30" />
      <div className="relative bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
        <div className="bg-white dark:bg-black rounded-2xl p-6 space-y-4">
          <HeroItem icon={<CalendarCheck className="text-green-500" />}>Agenda inteligente</HeroItem>
          <HeroItem icon={<Users className="text-blue-500" />}>Gestão de alunos</HeroItem>
          <HeroItem icon={<Dumbbell className="text-yellow-500" />}>Treinos personalizados</HeroItem>
        </div>
      </div>
    </div>
  );
}