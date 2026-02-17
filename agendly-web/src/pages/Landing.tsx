import { Link } from 'react-router-dom';
import {
  Dumbbell,
  Calendar,
  Users,
  BarChart3,
  Clock,
  CheckCircle2,
  ArrowRight,
  Zap,
  Menu
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: Calendar,
    title: 'Agenda Inteligente',
    description: 'Gerencie horários, evite conflitos e organize sessões com facilidade.',
  },
  {
    icon: Users,
    title: 'Gestão de Alunos',
    description: 'Cadastro completo com status e histórico.',
  },
  {
    icon: Dumbbell,
    title: 'Treinos Personalizados',
    description: 'Crie planos com divisões, séries e cargas.',
  },
  {
    icon: BarChart3,
    title: 'Histórico Completo',
    description: 'Acompanhe presença e evolução dos alunos.',
  },
  {
    icon: Clock,
    title: 'Disponibilidade Flexível',
    description: 'Configure horários diferentes por dia.',
  },
  {
    icon: Zap,
    title: 'Rápido e Moderno',
    description: 'Interface fluida com tema escuro e claro.',
  },
];

const benefits = [
  'Conflito de horários validado automaticamente',
  'Treinos estruturados com séries, reps e carga',
  'Histórico de presença por aluno',
  'Agenda semanal visual e intuitiva',
  'Funciona em qualquer dispositivo',
  'Tema escuro e claro',
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold italic text-lg text-green-400">
              Agendly
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm">Entrar</Button>
            </Link>
            <Link to="/cadastro">
              <Button size="sm">Começar grátis</Button>
            </Link>
          </div>

          {/* Mobile */}
          <MobileDropdown />

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs sm:text-sm text-muted-foreground mb-6"
            >
              <Zap className="w-3.5 h-3.5 text-primary" />
              Sistema para Personal Trainers
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Gerencie sua agenda e<br />
              <span className="text-gradient">treinos em um só lugar</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8"
            >
              Plataforma completa para personal trainers organizarem alunos,
              agendamentos e planos de treino.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-sm mx-auto"
            >
              <Link to="/cadastro" className="w-full sm:w-auto">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  Começar grátis
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link to="/login" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Já tenho conta
                </Button>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Tudo que você precisa
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Funcionalidades pensadas para o dia a dia do personal trainer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md gradient-primary flex items-center justify-center">
              <Dumbbell className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-heading font-semibold text-sm">
              Agendly
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Agendly. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}


/* MOBILE DROPDOWN */
function MobileDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg border border-border"
      >
        <Menu className="w-5 h-5" />
      </button>

      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-14 w-56 bg-black text-white rounded-lg shadow-xl p-4 flex flex-col gap-3 z-50">

            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="w-full text-left py-2 px-3 rounded hover:bg-white/10 transition">
                Entrar
              </button>
            </Link>

            <Link to="/cadastro" onClick={() => setOpen(false)}>
              <button className="w-full py-2 px-3 rounded bg-white text-black font-medium hover:opacity-90 transition">
                Começar grátis
              </button>
            </Link>

            <div className="pt-3 border-t border-white/20">
              <ThemeToggle />
            </div>

          </div>
        </>
      )}
    </div>
  );
}
