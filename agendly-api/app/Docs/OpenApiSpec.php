<?php

namespace App\Docs;

use OpenApi\Attributes as OA;

#[OA\Info(
    version: "1.0.0",
    title: "Agendly API",
    description: "REST API for Agendly platform — scheduling, students, services and appointments management.",
    termsOfService: "https://agendly.com.br/terms",
    contact: new OA\Contact(
        name: "Agendly Support",
        email: "support@agendly.com.br",
        url: "https://agendly.com.br"
    ),
    license: new OA\License(
        name: "Proprietary",
        url: "https://agendly.com.br/license"
    )
)]

/*
|--------------------------------------------------------------------------
| Servers
|--------------------------------------------------------------------------
*/

#[OA\Server(
    url: "http://localhost/api",
    description: "Local development"
)]

#[OA\Server(
    url: "https://staging.api.agendly.com.br",
    description: "Staging environment"
)]

#[OA\Server(
    url: "https://api.agendly.com.br",
    description: "Production environment"
)]

/*
|--------------------------------------------------------------------------
| Security
|--------------------------------------------------------------------------
*/

#[OA\SecurityScheme(
    securityScheme: "bearerAuth",
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT",
    description: "JWT Bearer token authentication. Example: 'Authorization: Bearer {token}'"
)]

/*
|--------------------------------------------------------------------------
| Global Tags
|--------------------------------------------------------------------------
*/

#[OA\Tag(
    name: "Auth",
    description: "Authentication and session management"
)]

#[OA\Tag(
    name: "Students",
    description: "Students management"
)]

#[OA\Tag(
    name: "Services",
    description: "Services offered by personal trainers"
)]

#[OA\Tag(
    name: "Appointments",
    description: "Scheduling and appointment operations"
)]

/*
|--------------------------------------------------------------------------
| External Docs
|--------------------------------------------------------------------------
*/

#[OA\ExternalDocumentation(
    description: "Official Agendly documentation",
    url: "https://docs.agendly.com.br"
)]

class OpenApiSpec
{
}