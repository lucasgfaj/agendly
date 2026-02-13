<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
 public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();

            $table->foreignId('personal_id')
                ->constrained('users')
                ->cascadeOnDelete();

            $table->foreignId('student_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('workout_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete();

            $table->timestampTz('scheduled_at');
            $table->integer('duration_minutes');

            $table->enum('status', [
                'scheduled',
                'canceled',
                'completed',
                'no_show'
            ])->default('scheduled');

            $table->timestampTz('canceled_at')->nullable();
            $table->text('cancellation_reason')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->index(['personal_id', 'scheduled_at']);
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
