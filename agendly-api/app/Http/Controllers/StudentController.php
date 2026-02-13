<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

#[OA\Tag(
    name: "Students",
    description: "Operações relacionadas a estudantes"
)]
class StudentController extends Controller
{
    #[OA\Get(
        path: "/v1/students",
        summary: "Lista estudantes",
        tags: ["Students"],
        responses: [
            new OA\Response(
                response: 200,
                description: "Lista retornada com sucesso"
            )
        ]
    )]
    public function index()
    {
        return Student::all();
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
    }
}
