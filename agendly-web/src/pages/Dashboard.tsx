import { Users, Calendar, Dumbbell, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import PageHeader from '@/components/PageHeader';
import StatCard from '@/components/StatCard';
import StatusBadge from '@/components/StatusBadge';
import { mockStudents, mockAppointments, mockWorkouts } from '@/data/mockData';
import { Link } from 'react-router-dom';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Dashboard() {
  const activeStudents = mockStudents.filter(s => s.status === 'active').length;
  const todayAppointments = mockAppointments.filter(
    a => format(a.scheduledAt, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd') && a.status === 'scheduled'
  );
  const upcomingAppointments = mockAppointments
    .filter(a => a.status === 'scheduled' && a.scheduledAt >= new Date())
    .sort((a, b) => a.scheduledAt.getTime() - b.scheduledAt.getTime())
    .slice(0, 5);

  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle={format(new Date(), "EEEE, dd 'de' MMMM", { locale: ptBR })}
      />

      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <motion.div variants={item}>
          <StatCard label="Alunos Ativos" value={activeStudents} icon={<Users className="w-5 h-5" />} trend="+2 este mês" />
        </motion.div>
        <motion.div variants={item}>
          <StatCard label="Sessões Hoje" value={todayAppointments.length} icon={<Calendar className="w-5 h-5" />} />
        </motion.div>
        <motion.div variants={item}>
          <StatCard label="Treinos Criados" value={mockWorkouts.length} icon={<Dumbbell className="w-5 h-5" />} />
        </motion.div>
        <motion.div variants={item}>
          <StatCard label="Taxa Presença" value="94%" icon={<TrendingUp className="w-5 h-5" />} trend="↑ 3% vs mês anterior" />
        </motion.div>
      </motion.div>

      {/* Upcoming sessions */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card rounded-xl overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-heading font-semibold text-lg text-foreground">Próximas Sessões</h2>
          <Link to="/agenda" className="text-sm text-primary hover:underline">Ver agenda →</Link>
        </div>
        <div className="divide-y divide-border">
          {upcomingAppointments.length === 0 ? (
            <div className="px-6 py-8 text-center text-muted-foreground">
              Nenhuma sessão agendada
            </div>
          ) : (
            upcomingAppointments.map((apt) => {
              const student = mockStudents.find(s => s.id === apt.studentId);
              const workout = mockWorkouts.find(w => w.id === apt.workoutId);
              return (
                <div key={apt.id} className="flex items-center gap-4 px-6 py-4 hover:bg-secondary/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm">
                    {student?.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{student?.name}</p>
                    <p className="text-sm text-muted-foreground">{workout?.name || 'Sem treino vinculado'}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-medium text-foreground">
                      {format(apt.scheduledAt, 'HH:mm')}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {format(apt.scheduledAt, "EEE, dd/MM", { locale: ptBR })}
                    </p>
                  </div>
                  <StatusBadge status={apt.status} />
                </div>
              );
            })
          )}
        </div>
      </motion.div>
    </div>
  );
}