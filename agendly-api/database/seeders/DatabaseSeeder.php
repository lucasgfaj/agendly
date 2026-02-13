<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Student;
use App\Models\Availability;
use App\Models\Workout;
use App\Models\Exercise;
use App\Models\WorkoutExercise;
use App\Models\Appointment;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        /*
        |--------------------------------------------------------------------------
        | PERSONAL
        |--------------------------------------------------------------------------
        */
        $personal = User::create([
            'name' => 'João Personal',
            'email' => 'personal@example.com',
            'password' => Hash::make('12345678'),
            'timezone' => 'America/Sao_Paulo',
        ]);

        /*
        |--------------------------------------------------------------------------
        | ALUNOS
        |--------------------------------------------------------------------------
        */
        $student1 = Student::create([
            'personal_id' => $personal->id,
            'name' => 'Carlos Silva',
            'email' => 'carlos@example.com',
            'phone' => '11999999999',
            'status' => 'active',
            'notes' => 'Lesão leve no joelho direito',
        ]);

        $student2 = Student::create([
            'personal_id' => $personal->id,
            'name' => 'Mariana Souza',
            'status' => 'active',
        ]);

        $student3 = Student::create([
            'personal_id' => $personal->id,
            'name' => 'Rafael Lima',
            'status' => 'inactive',
        ]);

        /*
        |--------------------------------------------------------------------------
        | DISPONIBILIDADE
        |--------------------------------------------------------------------------
        */
        Availability::create([
            'personal_id' => $personal->id,
            'weekday' => 1, // Segunda
            'start_time' => '08:00',
            'end_time' => '12:00',
            'session_duration_minutes' => 60,
            'active' => true,
        ]);

        /*
        |--------------------------------------------------------------------------
        | EXERCÍCIOS
        |--------------------------------------------------------------------------
        */
        $supino = Exercise::create([
            'personal_id' => $personal->id,
            'name' => 'Supino Reto',
            'muscle_group' => 'Peito',
        ]);

        $triceps = Exercise::create([
            'personal_id' => $personal->id,
            'name' => 'Tríceps Pulley',
            'muscle_group' => 'Tríceps',
        ]);

        /*
        |--------------------------------------------------------------------------
        | TREINO
        |--------------------------------------------------------------------------
        */
        $workout = Workout::create([
            'personal_id' => $personal->id,
            'name' => 'Treino A - Peito e Tríceps',
            'description' => 'Foco em hipertrofia',
        ]);

        WorkoutExercise::create([
            'workout_id' => $workout->id,
            'exercise_id' => $supino->id,
            'exercise_order' => 1,
            'sets' => 4,
            'reps' => '8-10',
            'load' => '40kg',
            'rest_seconds' => 60,
        ]);

        WorkoutExercise::create([
            'workout_id' => $workout->id,
            'exercise_id' => $triceps->id,
            'exercise_order' => 2,
            'sets' => 3,
            'reps' => '10-12',
            'load' => '25kg',
            'rest_seconds' => 45,
        ]);

        /*
        |--------------------------------------------------------------------------
        | AGENDAMENTOS
        |--------------------------------------------------------------------------
        */
        Appointment::create([
            'personal_id' => $personal->id,
            'student_id' => $student1->id,
            'workout_id' => $workout->id,
            'scheduled_at' => now()->addDay(),
            'duration_minutes' => 60,
            'status' => 'scheduled',
        ]);

        Appointment::create([
            'personal_id' => $personal->id,
            'student_id' => $student2->id,
            'scheduled_at' => now()->addDays(2),
            'duration_minutes' => 60,
            'status' => 'scheduled',
        ]);
    }
}