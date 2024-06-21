# Native Production Backend Test

An API for hotel management using Node.js, Express, and PostgreSQL with Sequelize as the ORM.

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

![Figure 1](https://github.com/mukhlisakb/npv-backend-test-hotel-API/blob/main/assets/picture2.png)
![Figure 2](https://github.com/mukhlisakb/npv-backend-test-hotel-API/blob/main/assets/picture1.png)

# Conclusion

If you encounter any issues or have questions, feel free to open an issue in this repository or contact me via email [mukhlisakb@gmail.com]. Thank you!
