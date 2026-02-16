<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;
#[OA\Tag(
    name: "Students",
    description: "Operations related to students"
)]
class StudentController extends Controller
{
    #[OA\Get(
        path: "/v1/students",
        summary: "List students",
        description: "Returns all students linked to the authenticated personal trainer.",
        tags: ["Students"],
        security: [["bearerAuth" => []]],
        responses: [

            new OA\Response(
                response: 200,
                description: "Students retrieved successfully",
                content: new OA\JsonContent(
                    type: "object",
                    properties: [
                        new OA\Property(
                            property: "data",
                            type: "array",
                            items: new OA\Items(ref: "#/components/schemas/Student")
                        )
                    ]
                )
            ),

            new OA\Response(
                response: 401,
                description: "Unauthenticated"
            )
        ]
    )]
    public function index()
    {
        return response()->json([
            'data' => Student::all()
        ]);
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
