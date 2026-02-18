import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Users, Dumbbell, LayoutDashboard, Clock, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/agenda', icon: Calendar, label: 'Agenda' },
    { to: '/alunos', icon: Users, label: 'Alunos' },
    { to: '/treinos', icon: Dumbbell, label: 'Treinos' },
    { to: '/disponibilidade', icon: Clock, label: 'Horários' },
];

export default function AppSidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <aside
            className={cn(
                "h-screen sticky top-0 flex flex-col border-r border-border bg-sidebar transition-all duration-300",
                collapsed ? "w-[72px]" : "w-[240px]"
            )}
        >
            {/* Logo */}
            <div className="flex items-center gap-3 px-4 h-16 border-b border-border">
                <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="w-5 h-5 text-primary-foreground" />
                </div>
                {!collapsed && (
                    <span className="font-heading font-bold text-lg text-foreground tracking-tight">
                        FitPro
                    </span>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-4 px-2 space-y-1">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.to ||
                        (item.to !== '/' && location.pathname.startsWith(item.to));
                    return (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                                isActive
                                    ? "bg-primary/10 text-primary glow-primary"
                                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-primary")} />
                            {!collapsed && <span>{item.label}</span>}
                        </NavLink>
                    );
                })}
            </nav>

            {/* Bottom actions */}
            <div className="border-t border-border p-2 space-y-1">
                <div className={cn("flex items-center", collapsed ? "justify-center" : "justify-between px-2")}>
                    {!collapsed && <span className="text-xs text-muted-foreground">Tema</span>}
                    <ThemeToggle />
                </div>
                <button
                    onClick={handleLogout}
                    className={cn(
                        "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                        collapsed && "justify-center"
                    )}
                >
                    <LogOut className="w-4 h-4 flex-shrink-0" />
                    {!collapsed && <span>Sair</span>}
                </button>
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="flex items-center justify-center w-full h-10 text-muted-foreground hover:text-foreground transition-colors"
                >
                    {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                </button>
            </div>
        </aside>
    );
}