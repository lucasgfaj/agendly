<?php

namespace App\Docs;

use OpenApi\Attributes as OA;

#[OA\Info(
    version: "1.0.0",
    title: "Agendly API",
    description: "Documentação da API do Agendly"
)]
#[OA\Server(
    url: "http://localhost:8000/api",
    description: "Servidor Local"
)]
class OpenApiSpec
{
}