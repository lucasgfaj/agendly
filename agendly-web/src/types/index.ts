// Types for Personal Trainer System

export type StudentStatus = 'active' | 'inactive';
export type AppointmentStatus = 'scheduled' | 'canceled' | 'completed' | 'no_show';

export interface Student {
  id: string;
  personalId: string;
  name: string;
  email?: string;
  phone?: string;
  status: StudentStatus;
  notes: string;
  createdAt: Date;
}

export interface Availability {
  id: string;
  personalId: string;
  weekday: number; // 0=Sunday to 6=Saturday
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  sessionDurationMinutes: number;
  active: boolean;
}

export interface Appointment {
  id: string;
  personalId: string;
  studentId: string;
  workoutId?: string;
  scheduledAt: Date;
  durationMinutes: number;
  status: AppointmentStatus;
  canceledAt?: Date;
  cancellationReason?: string;
}

export interface Workout {
  id: string;
  personalId: string;
  name: string;
  description: string;
}

export interface Exercise {
  id: string;
  personalId: string;
  name: string;
  muscleGroup: string;
  description: string;
}

export interface WorkoutExercise {
  id: string;
  workoutId: string;
  exerciseId: string;
  exerciseName: string;
  exerciseOrder: number;
  sets: number;
  reps: number;
  load?: string;
  restSeconds?: number;
  notes: string;
}

export const WEEKDAYS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export const WEEKDAYS_SHORT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

export const MUSCLE_GROUPS = [
  'Peito', 'Costas', 'Ombros', 'Bíceps', 'Tríceps',
  'Quadríceps', 'Posterior', 'Glúteos', 'Panturrilha',
  'Abdômen', 'Core', 'Cardio', 'Corpo Inteiro'
];