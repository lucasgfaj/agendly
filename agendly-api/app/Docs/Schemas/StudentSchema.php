<?php

namespace App\Docs\Schemas;

use OpenApi\Attributes as OA;

#[OA\Schema(
    schema: "Student",
    title: "Student",
    description: "Represents a student/client linked to a personal trainer.",
    type: "object",
    required: ["id","personal_id","name","status","created_at","updated_at"]
)]
class StudentSchema
{
    #[OA\Property(
        description: "Unique student identifier",
        example: 1
    )]
    public int $id;

    #[OA\Property(
        description: "Identifier of the personal trainer responsible for the student",
        example: 1
    )]
    public int $personal_id;

    #[OA\Property(
        description: "Full name of the student",
        example: "Carlos Silva"
    )]
    public string $name;

    #[OA\Property(
        description: "Student email address",
        example: "carlos@example.com",
        nullable: true,
        format: "email"
    )]
    public ?string $email;

    #[OA\Property(
        description: "Phone number including area code",
        example: "11999999999",
        nullable: true
    )]
    public ?string $phone;

    #[OA\Property(
        description: "Current status of the student",
        example: "active",
        enum: ["active","inactive"]
    )]
    public string $status;

    #[OA\Property(
        description: "Medical notes or additional observations",
        example: "Mild right knee injury",
        nullable: true
    )]
    public ?string $notes;

    #[OA\Property(
        description: "Creation timestamp",
        example: "2026-02-13T21:31:41.000000Z",
        format: "date-time"
    )]
    public string $created_at;

    #[OA\Property(
        description: "Last update timestamp",
        example: "2026-02-13T21:31:41.000000Z",
        format: "date-time"
    )]
    public string $updated_at;

    #[OA\Property(
        description: "Soft deletion timestamp",
        nullable: true,
        example: null,
        format: "date-time"
    )]
    public ?string $deleted_at;
}