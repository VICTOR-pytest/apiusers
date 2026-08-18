# 👤 User API

### RESTful User Management API

> REST API for user management built with Node.js, Express.js and MongoDB, featuring layered architecture, input validation, centralized error handling and secure password hashing.

---

## 🚀 Overview

**User API** is a backend application designed to demonstrate the development of a production-oriented REST API using the Node.js ecosystem.

The project focuses on backend fundamentals such as:

- RESTful API design
- Layered architecture
- MongoDB data persistence
- Input validation
- Password security
- Centralized error handling
- Environment configuration
- Database seeders
- HTTP status codes
- JSON API responses

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | REST API framework |
| MongoDB | Database |
| EJS | View layer |
| bcryptjs | Password hashing |
| JavaScript | Application language |
| dotenv | Environment configuration |

---

## 🏗️ Architecture

The application follows a modular backend structure separating responsibilities between routes, controllers, models, middleware and views.

```text
apiusers/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── usermodel.js
│   ├── route/
│   │   └── user.js
│   ├── seeders/
│   │   └── userSeeder.js
│   └── views/
│       ├── userView.js
│       ├── errorView.js
│       └── index.js
├── scripts/
│   └── cleanSeed.js
├── index.js
├── package.json
├── .env.example
└── README.md
```

### Request Flow

```text
Client
  │
  ▼
Express Router
  │
  ▼
Controller
  │
  ▼
Model
  │
  ▼
MongoDB
  │
  ▼
View / Serializer
  │
  ▼
JSON Response
```

---

## ✨ Features

- [x] Create users
- [x] List users
- [x] Update users
- [x] Delete users
- [x] MongoDB persistence
- [x] Password hashing
- [x] Input validation
- [x] Duplicate email detection
- [x] Centralized error handling
- [x] Environment variables
- [x] Database seeders
- [x] Test data cleanup script
- [x] CORS configuration

---

## 📡 API Endpoints

### List Users

```http
GET /api/users
```

Example response:

```json
{
  "status": "success",
  "message": "Users listed successfully",
  "total": 3,
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "name": "User Example",
      "email": "user@example.com",
      "createdAt": "2026-05-11T10:30:00Z"
    }
  ]
}
```

### Create User

```http
POST /api/users
Content-Type: application/json
```

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "status": "success",
  "message": "User created successfully",
  "data": {
    "id": "507f1f77bcf86cd799439012",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2026-05-11T10:35:00Z"
  }
}
```

Possible errors:

- `400 Bad Request`
- `409 Conflict`

### Update User

```http
PUT /api/users/:id
Content-Type: application/json
```

Request:

```json
{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "password": "newpassword123"
}
```

### Delete User

```http
DELETE /api/users/:id
```

Response:

```json
{
  "status": "success",
  "message": "User deleted successfully"
}
```

---

## 🔐 Security

The API implements basic security practices.

### Password Hashing

Passwords are hashed using `bcryptjs`.

Plain-text passwords should never be stored in the database or returned by the API.

### Input Validation

Requests are validated before being processed.

Examples:

- Required fields
- Email uniqueness
- User identification
- Request body validation

### Error Handling

Application errors are handled through centralized middleware.

```text
Request
   │
   ▼
Validation
   │
   ├── Invalid ──► Error Handler ──► 4xx
   │
   ▼
Controller
   │
   ▼
Database
   │
   ├── Error ──► Error Handler
   │
   ▼
Response
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```bash
cp .env.example .env
```

Example:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/userapi
NODE_ENV=development
```

Never commit real credentials or secrets.

---

## 🚀 Getting Started

### Requirements

- Node.js 14+
- MongoDB
- npm

### 1. Clone the repository

```bash
git clone https://github.com/VICTOR-pytest/apiusers.git
cd apiusers
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

```bash
cp .env.example .env
```

Configure your MongoDB connection.

### 4. Start the API

```bash
npm start
```

Or:

```bash
node index.js
```

The server will run on:

```text
http://localhost:3000
```

---

## 🌱 Seed Data

The application can populate the database with development users.

Seed data should only be used in development environments.

To clean seeded users:

```bash
node scripts/cleanSeed.js
```

---

## 🧪 Testing the API

Example using cURL:

```bash
curl http://localhost:3000/api/users
```

Create a user:

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

---

## 📊 HTTP Status Codes

| Status | Meaning |
|---|---|
| 200 | Successful request |
| 201 | Resource created |
| 400 | Invalid request |
| 404 | Resource not found |
| 409 | Resource conflict |
| 500 | Internal server error |

---

## 🧠 Engineering Concepts Demonstrated

### Backend

- Node.js
- Express.js
- REST API design
- Layered architecture
- Controllers
- Middleware
- Routing

### Database

- MongoDB
- Database models
- CRUD operations
- Data persistence

### Security

- Password hashing
- Input validation
- Environment variables
- CORS
- Centralized error handling

### Software Engineering

- Separation of concerns
- Modular architecture
- Error handling
- Configuration management
- Development seeders

---

## 🗺️ Roadmap

- [ ] JWT authentication
- [ ] Refresh tokens
- [ ] Role-based authorization
- [ ] Automated tests
- [ ] API documentation with OpenAPI
- [ ] Request rate limiting
- [ ] Docker support
- [ ] CI/CD with GitHub Actions
- [ ] Pagination
- [ ] Advanced filtering
- [ ] API versioning

---

## 📌 Project Status

**Status:** Maintained / Learning Project

The project currently focuses on demonstrating backend API development with Node.js, Express.js and MongoDB.

Future improvements will focus on authentication, testing, observability and production-oriented infrastructure.

---

## 👨‍💻 Author

**Victor Ramos**

Backend Developer focused on:

```text
Python
Node.js
FastAPI
Django
PostgreSQL
Docker
React
TypeScript
Artificial Intelligence
Computer Vision
```

GitHub:

https://github.com/VICTOR-pytest

---

## 📄 License

This project is licensed under the ISC License.

---

> **User API — Building reliable REST APIs with Node.js.**
