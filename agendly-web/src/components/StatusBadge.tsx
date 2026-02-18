import { cn } from '@/lib/utils';
import type { AppointmentStatus } from '@/types';

const statusConfig: Record<AppointmentStatus, { label: string; className: string }> = {
  scheduled: { label: 'Agendado', className: 'bg-info/15 text-info' },
  completed: { label: 'Concluído', className: 'bg-success/15 text-success' },
  canceled: { label: 'Cancelado', className: 'bg-destructive/15 text-destructive' },
  no_show: { label: 'Faltou', className: 'bg-warning/15 text-warning' },
};

export default function StatusBadge({ status }: { status: AppointmentStatus }) {
  const config = statusConfig[status];
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", config.className)}>
      {config.label}
    </span>
  );
}