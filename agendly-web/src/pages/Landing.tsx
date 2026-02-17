import { Link } from 'react-router-dom';
import { Dumbbell, Calendar, Users, BarChart3, Clock, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
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
        description: 'Cadastro completo com status, observações e histórico de treinos.',
    },
    {
        icon: Dumbbell,
        title: 'Treinos Personalizados',
        description: 'Crie planos com divisões, séries, cargas e observações por exercício.',
    },
    {
        icon: BarChart3,
        title: 'Histórico Completo',
        description: 'Acompanhe presença, evolução e dados de cada aluno ao longo do tempo.',
    },
    {
        icon: Clock,
        title: 'Disponibilidade Flexível',
        description: 'Configure horários diferentes por dia da semana com duração variável.',
    },
    {
        icon: Zap,
        title: 'Rápido e Moderno',
        description: 'Interface fluida com tema escuro e claro, pensada para o dia a dia.',
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
            {/* Nav */}
            <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                            <Dumbbell className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="font-heading font-bold italic text-lg text-green-400 relative">
                            Agendly
                            <span className="absolute top-0 left-0 w-full h-full blur-md opacity-30 text-green-500">
                                Agendly
                            </span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <Link to="/login">
                            <Button variant="ghost" size="sm">Entrar</Button>
                        </Link>
                        <Link to="/cadastro">
                            <Button size="sm">Começar grátis</Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
                    <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-primary blur-3xl" />
                </div>
                <div className="max-w-6xl mx-auto px-6 py-24 lg:py-36 text-center relative z-10">
                    <motion.div initial="hidden" animate="show" variants={stagger}>
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground mb-8">
                            <Zap className="w-3.5 h-3.5 text-primary" />
                            Sistema para Personal Trainers
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Gerencie sua agenda e<br />
                            <span className="text-gradient">treinos em um só lugar</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                            A Agendly é a plataforma completa para personal trainers organizarem alunos,
                            agendamentos e planos de treino com eficiência profissional.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4">
                            <Link to="/cadastro">
                                <Button size="lg" className="gap-2">
                                    Começar grátis <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Link to="/login">
                                <Button size="lg" variant="outline">Já tenho conta</Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 border-t border-border">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={stagger}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={fadeUp} className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                            Tudo que você precisa
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-xl mx-auto">
                            Funcionalidades pensadas para o dia a dia do personal trainer.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={stagger}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {features.map((f) => (
                            <motion.div
                                key={f.title}
                                variants={fadeUp}
                                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors"
                            >
                                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <f.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{f.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 border-t border-border bg-card/50">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={stagger}
                        className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
                                Feito para quem leva o<br />
                                <span className="text-gradient">treino a sério</span>
                            </h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                A Agendly não é só mais um CRUD. É um sistema com regras de negócio reais,
                                validação de conflitos e estrutura profissional.
                            </p>
                            <ul className="space-y-3">
                                {benefits.map(b => (
                                    <li key={b} className="flex items-center gap-3 text-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-sm">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">J</div>
                                <div>
                                    <p className="font-medium text-foreground">João Silva</p>
                                    <p className="text-xs text-muted-foreground">Treino A – Peito e Tríceps</p>
                                </div>
                            </div>
                            <div className="border border-border rounded-lg p-4 space-y-2">
                                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Supino Reto</span><span className="text-foreground">4×12 – 40kg</span></div>
                                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Supino Inclinado</span><span className="text-foreground">3×10 – 30kg</span></div>
                                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Tríceps Corda</span><span className="text-foreground">3×15 – 20kg</span></div>
                                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Tríceps Francês</span><span className="text-foreground">3×12 – 12kg</span></div>
                            </div>
                            <p className="text-xs text-muted-foreground">Seg 19:00 – 20:00 · Status: Agendado</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 border-t border-border">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
                        <motion.h2 variants={fadeUp} className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                            Pronto para organizar sua rotina?
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-8">
                            Crie sua conta gratuita e comece a usar o Agendly agora mesmo.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <Link to="/cadastro">
                                <Button size="lg" className="gap-2">
                                    Criar conta grátis <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border py-8">
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md gradient-primary flex items-center justify-center">
                            <Dumbbell className="w-3.5 h-3.5 text-primary-foreground" />
                        </div>
                        <span className="font-heading font-semibold text-sm text-foreground">Agendly</span>
                    </div>
                    <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Agendly. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
