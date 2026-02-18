import type { Student, Appointment, Workout, WorkoutExercise, Exercise, Availability } from '@/types';
import { addDays, setHours, setMinutes, startOfWeek } from 'date-fns';

const today = new Date();
const weekStart = startOfWeek(today, { weekStartsOn: 1 });

export const mockStudents: Student[] = [
  { id: '1', personalId: '1', name: 'João Silva', email: 'joao@email.com', phone: '(11) 99999-0001', status: 'active', notes: 'Lesão no joelho esquerdo - evitar agachamento profundo', createdAt: new Date('2024-01-15') },
  { id: '2', personalId: '1', name: 'Maria Santos', email: 'maria@email.com', phone: '(11) 99999-0002', status: 'active', notes: 'Objetivo: hipertrofia. Treina 4x/semana.', createdAt: new Date('2024-02-10') },
  { id: '3', personalId: '1', name: 'Pedro Costa', email: 'pedro@email.com', phone: '(11) 99999-0003', status: 'active', notes: 'Iniciante. Foco em condicionamento.', createdAt: new Date('2024-03-05') },
  { id: '4', personalId: '1', name: 'Ana Oliveira', email: 'ana@email.com', phone: '(11) 99999-0004', status: 'inactive', notes: 'Pausou por viagem. Retorna em março.', createdAt: new Date('2024-01-20') },
  { id: '5', personalId: '1', name: 'Lucas Ferreira', email: 'lucas@email.com', phone: '(11) 99999-0005', status: 'active', notes: 'Treino para maratona. Corrida + funcional.', createdAt: new Date('2024-04-01') },
];

export const mockExercises: Exercise[] = [
  { id: '1', personalId: '1', name: 'Supino Reto', muscleGroup: 'Peito', description: 'Barra ou halteres' },
  { id: '2', personalId: '1', name: 'Supino Inclinado', muscleGroup: 'Peito', description: 'Halteres, 30-45 graus' },
  { id: '3', personalId: '1', name: 'Puxada Frontal', muscleGroup: 'Costas', description: 'Barra aberta' },
  { id: '4', personalId: '1', name: 'Remada Curvada', muscleGroup: 'Costas', description: 'Barra ou halteres' },
  { id: '5', personalId: '1', name: 'Desenvolvimento', muscleGroup: 'Ombros', description: 'Halteres sentado' },
  { id: '6', personalId: '1', name: 'Rosca Direta', muscleGroup: 'Bíceps', description: 'Barra reta' },
  { id: '7', personalId: '1', name: 'Tríceps Pulley', muscleGroup: 'Tríceps', description: 'Corda ou barra' },
  { id: '8', personalId: '1', name: 'Agachamento Livre', muscleGroup: 'Quadríceps', description: 'Barra nas costas' },
  { id: '9', personalId: '1', name: 'Leg Press 45°', muscleGroup: 'Quadríceps', description: 'Máquina' },
  { id: '10', personalId: '1', name: 'Stiff', muscleGroup: 'Posterior', description: 'Barra ou halteres' },
  { id: '11', personalId: '1', name: 'Hip Thrust', muscleGroup: 'Glúteos', description: 'Barra com apoio' },
  { id: '12', personalId: '1', name: 'Abdominal Crunch', muscleGroup: 'Abdômen', description: 'No solo ou máquina' },
];

export const mockWorkouts: Workout[] = [
  { id: '1', personalId: '1', name: 'Treino A - Peito e Tríceps', description: 'Foco em empurrar. Peito como grupo principal.' },
  { id: '2', personalId: '1', name: 'Treino B - Costas e Bíceps', description: 'Foco em puxar. Costas como grupo principal.' },
  { id: '3', personalId: '1', name: 'Treino C - Pernas', description: 'Membros inferiores completo.' },
];

export const mockWorkoutExercises: WorkoutExercise[] = [
  { id: '1', workoutId: '1', exerciseId: '1', exerciseName: 'Supino Reto', exerciseOrder: 1, sets: 4, reps: 10, load: '60kg', restSeconds: 90, notes: 'Controlar a descida' },
  { id: '2', workoutId: '1', exerciseId: '2', exerciseName: 'Supino Inclinado', exerciseOrder: 2, sets: 3, reps: 12, load: '20kg', restSeconds: 60, notes: '' },
  { id: '3', workoutId: '1', exerciseId: '7', exerciseName: 'Tríceps Pulley', exerciseOrder: 3, sets: 3, reps: 15, load: '25kg', restSeconds: 45, notes: 'Corda' },
  { id: '4', workoutId: '2', exerciseId: '3', exerciseName: 'Puxada Frontal', exerciseOrder: 1, sets: 4, reps: 10, load: '50kg', restSeconds: 90, notes: '' },
  { id: '5', workoutId: '2', exerciseId: '4', exerciseName: 'Remada Curvada', exerciseOrder: 2, sets: 3, reps: 12, load: '40kg', restSeconds: 60, notes: 'Pegada pronada' },
  { id: '6', workoutId: '2', exerciseId: '6', exerciseName: 'Rosca Direta', exerciseOrder: 3, sets: 3, reps: 12, load: '15kg', restSeconds: 45, notes: '' },
  { id: '7', workoutId: '3', exerciseId: '8', exerciseName: 'Agachamento Livre', exerciseOrder: 1, sets: 4, reps: 8, load: '80kg', restSeconds: 120, notes: 'Profundidade paralela' },
  { id: '8', workoutId: '3', exerciseId: '9', exerciseName: 'Leg Press 45°', exerciseOrder: 2, sets: 3, reps: 12, load: '200kg', restSeconds: 90, notes: '' },
  { id: '9', workoutId: '3', exerciseId: '10', exerciseName: 'Stiff', exerciseOrder: 3, sets: 3, reps: 12, load: '40kg', restSeconds: 60, notes: 'Manter costas retas' },
  { id: '10', workoutId: '3', exerciseId: '11', exerciseName: 'Hip Thrust', exerciseOrder: 4, sets: 4, reps: 10, load: '60kg', restSeconds: 60, notes: '' },
];

export const mockAvailabilities: Availability[] = [
  { id: '1', personalId: '1', weekday: 1, startTime: '06:00', endTime: '12:00', sessionDurationMinutes: 60, active: true },
  { id: '2', personalId: '1', weekday: 1, startTime: '14:00', endTime: '20:00', sessionDurationMinutes: 60, active: true },
  { id: '3', personalId: '1', weekday: 2, startTime: '06:00', endTime: '12:00', sessionDurationMinutes: 60, active: true },
  { id: '4', personalId: '1', weekday: 2, startTime: '14:00', endTime: '20:00', sessionDurationMinutes: 60, active: true },
  { id: '5', personalId: '1', weekday: 3, startTime: '06:00', endTime: '12:00', sessionDurationMinutes: 60, active: true },
  { id: '6', personalId: '1', weekday: 3, startTime: '14:00', endTime: '20:00', sessionDurationMinutes: 60, active: true },
  { id: '7', personalId: '1', weekday: 4, startTime: '06:00', endTime: '12:00', sessionDurationMinutes: 60, active: true },
  { id: '8', personalId: '1', weekday: 4, startTime: '14:00', endTime: '20:00', sessionDurationMinutes: 60, active: true },
  { id: '9', personalId: '1', weekday: 5, startTime: '06:00', endTime: '12:00', sessionDurationMinutes: 60, active: true },
  { id: '10', personalId: '1', weekday: 5, startTime: '14:00', endTime: '18:00', sessionDurationMinutes: 60, active: true },
  { id: '11', personalId: '1', weekday: 6, startTime: '08:00', endTime: '12:00', sessionDurationMinutes: 60, active: true },
];

export const mockAppointments: Appointment[] = [
  { id: '1', personalId: '1', studentId: '1', workoutId: '1', scheduledAt: setMinutes(setHours(addDays(weekStart, 0), 7), 0), durationMinutes: 60, status: 'completed' },
  { id: '2', personalId: '1', studentId: '2', workoutId: '2', scheduledAt: setMinutes(setHours(addDays(weekStart, 0), 8), 0), durationMinutes: 60, status: 'completed' },
  { id: '3', personalId: '1', studentId: '3', workoutId: '3', scheduledAt: setMinutes(setHours(addDays(weekStart, 0), 14), 0), durationMinutes: 60, status: 'completed' },
  { id: '4', personalId: '1', studentId: '1', workoutId: '2', scheduledAt: setMinutes(setHours(addDays(weekStart, 1), 7), 0), durationMinutes: 60, status: 'scheduled' },
  { id: '5', personalId: '1', studentId: '5', workoutId: '1', scheduledAt: setMinutes(setHours(addDays(weekStart, 1), 9), 0), durationMinutes: 60, status: 'scheduled' },
  { id: '6', personalId: '1', studentId: '2', workoutId: '3', scheduledAt: setMinutes(setHours(addDays(weekStart, 2), 8), 0), durationMinutes: 60, status: 'scheduled' },
  { id: '7', personalId: '1', studentId: '3', workoutId: '1', scheduledAt: setMinutes(setHours(addDays(weekStart, 2), 15), 0), durationMinutes: 60, status: 'canceled', canceledAt: new Date(), cancellationReason: 'Aluno doente' },
  { id: '8', personalId: '1', studentId: '5', workoutId: '2', scheduledAt: setMinutes(setHours(addDays(weekStart, 3), 7), 0), durationMinutes: 60, status: 'scheduled' },
  { id: '9', personalId: '1', studentId: '1', workoutId: '3', scheduledAt: setMinutes(setHours(addDays(weekStart, 3), 14), 0), durationMinutes: 60, status: 'scheduled' },
  { id: '10', personalId: '1', studentId: '2', workoutId: '1', scheduledAt: setMinutes(setHours(addDays(weekStart, 4), 8), 0), durationMinutes: 60, status: 'scheduled' },
];