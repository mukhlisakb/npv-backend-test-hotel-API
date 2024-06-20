# Native Production Backend Test

An API for hotel management using Node.js, Express, and PostgreSQL with Sequelize as the ORM.

## Folder Structure

```bash
npv-backend-test-hotel-API/
├── docker-compose.yml
├── Dockerfile
├── init.sql
├── package.json
├── tsconfig.json
├── wait-for-it.sh
├── .env
├── src/
│   ├── index.ts
│   ├── controllers/
│   │   ├── hotelController.ts
│   ├── models/
│   │   ├── hotel.ts
│   ├── routes/
│   │   ├── hotelRoutes.ts
│   ├── config/
│   │   ├── database.ts
└── dist/
    ├── (this folder will contain the compiled TypeScript files)

```

## Prerequisites

- Node.js
- Docker and Docker Compose

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mukhlisakb/npv-backend-test-hotel-API.git
cd npv-backend-test-hotel-API
```

2. Running Docker Compose

```bash
docker compose up --build
```

3. Running Development mode

```bash
npm run dev
```

# API Endpoints

Create Hotel

- Endpoint: using curl
- Description: Adds a new hotel.
  Request Example:

```bash
curl -X POST http://localhost:3000/hotels \
-H "Content-Type: application/json" \
-d '{
      "name": "Hotel ABC",
      "city": "Jakarta",
      "price": 200,
      "date": "2024-06-20",
      "slug": "hotel-abc",
      "sort_field": "price",
      "sort_order": "asc"
    }'
}
```

# Conclusion

If you encounter any issues or have questions, feel free to open an issue in this repository or contact me via email [mukhlisakb@gmail.com]. Thank you!