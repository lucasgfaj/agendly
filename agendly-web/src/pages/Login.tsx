import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dumbbell, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ThemeToggle from '@/components/ThemeToggle';
import { toast, Toaster } from "sonner";
import { login } from '@/services/auth.api';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Preencha todos os campos');
            return;
        }

        try {
            setLoading(true);

            await login({
                email,
                password,
            });

            toast.success('Login realizado com sucesso!');
            navigate('/dashboard');

        } catch (error: any) {
            toast.error(
                error.response?.data?.message ||
                'Erro ao realizar login. Verifique suas credenciais e tente novamente.'
            );
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="min-h-screen flex bg-background">
            {/* Left - Form */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-xl mx-auto w-full">
                <div className="absolute top-6 right-6">
                    <ThemeToggle />
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Link to="/" className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                            <Dumbbell className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="font-heading font-bold italic text-lg text-green-400 relative">
                            Agendly
                            <span className="absolute top-0 left-0 w-full h-full blur-md opacity-30 text-green-500">
                                Agendly
                            </span>
                        </span>
                    </Link>


                    <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Bem-vindo de volta</h1>
                    <p className="text-muted-foreground mb-8">Entre na sua conta para gerenciar seus treinos e alunos.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="pl-10 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Entrando...' : 'Entrar'}
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        Não tem conta?{' '}
                        <Link to="/cadastro" className="text-primary hover:underline font-medium">Criar conta</Link>
                    </p>
                </motion.div>
            </div>

            {/* Right - Visual */}
            <div className="hidden lg:flex flex-1 items-center justify-center gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 rounded-full border-2 border-primary-foreground" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-primary-foreground" />
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-center z-10 px-12"
                >
                    <Dumbbell className="w-20 h-20 text-primary-foreground mx-auto mb-6" />
                    <h2 className="font-heading text-4xl font-bold text-primary-foreground mb-4">
                        Gerencie seus treinos com eficiência
                    </h2>
                    <p className="text-primary-foreground/80 text-lg max-w-md mx-auto">
                        Agenda, alunos, treinos e histórico em um só lugar.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
