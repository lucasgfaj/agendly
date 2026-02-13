<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

Route::prefix('v1')->group(function () {
    Route::apiResource('students', StudentController::class);
});