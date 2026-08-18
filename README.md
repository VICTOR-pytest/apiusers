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
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   └── errorHandler.js
│   │
│   ├── models/
│   │   └── usermodel.js
│   │
│   ├── route/
│   │   └── user.js
│   │
│   ├── seeders/
│   │   └── userSeeder.js
│   │
│   └── views/
│       ├── userView.js
│       ├── errorView.js
│       └── index.js
│
├── scripts/
│   └── cleanSeed.js
│
├── index.js
├── package.json
├── .env.example
└── README.md
