## Agendly API

Backend API for the Agendly platform — a scheduling and personal trainer management system.

Built with:

- Laravel
- L5-Swagger (Open API)
- Docker
- PostgreSQL
- Nginx

This service exposes REST endpoints for managing students, services and appointments.

## Getting Started

Clone the repository:

```
git clone https://github.com/lucasgfaj/agendly.git
cd agendly/agendly-api
```

## Environment Setup

Copy environment file:

```
cp .env.example .env
```

Installation 

Install dependencies:

```
./run composer install
```
Start containers: 
```
./run up -d
```
Reset database (migrate + seed):
```
./run db:reset
```
Install frontend assets (Swagger UI build tools):
```
yarn install
```

## Running the API 

After containers are up, the API will be available at:

```
http://localhost/api
```
## API Documentation (Swagger)

Interactive API documentation:

```
http://localhost/api/documentation
```

This interface allows you to:

- Explore endpoints
- View schemas
- Authenticate via JWT
- Execute requests

## Available Commands

Common development commands:

```
./run up -d        # Start containers
./run down         # Stop containers
./run composer     # Composer inside container
./run artisan      # Laravel artisan
./run db:reset     # Fresh migrate + seed
```
### For more commands

```
./run list # List all commands
```

## API Versioning

All endpoints are versioned:

```
/api/v1/...
```
Example:
```
GET /api/v1/students
```

## Authentication
The API uses JWT Bearer authentication. <br>
Header format:

```
Authorization: Bearer {token}
```
You can authorize directly inside Swagger UI.

## Development Notes

- Swagger docs are generated via PHP Attributes

- Schemas are located in ```App/Docs/Schemas```

- Global OpenAPI config: ```App/Docs/OpenApiSpec```

- Controllers contain endpoint annotations

## License

The Agendly API is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
