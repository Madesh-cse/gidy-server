

# 🚀 Gidy.ai – Server (Backend)


Backend API for Gidy.ai Profile Management Platform built using Node.js, Express, TypeScript, and MongoDB.

This server handles profile CRUD operations, image uploads, and secure API communication with the frontend.

---

## 🌟 Features

Profile CRUD Operations  
Create, read, update, and manage profile information.

Education & Experience APIs  
Structured endpoints for managing education and work experience data.

Career Goal Management  
RESTful endpoints for storing and updating career goals.

Image Upload Handling  
Static file serving using Express.

RESTful API Architecture  
Clean MVC structure (Models, Controllers, Routes).

Environment-Based Configuration  
Secure configuration using dotenv.

CORS Configuration  
Secure communication between frontend and backend.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- MongoDB Compass
- Mongoose
- CORS
- dotenv

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/gidy-ai-profile.git
cd gidy-ai-profile/server
```

2️⃣ Install Dependencies
``` bash
npm install
```

3️⃣ Environment Configuration

Create a .env file inside the /server directory:

``` bash
PORT=8080
MONGO_URI=your_mongodb_connection_string
```

4️⃣ Run Development Server
``` bash
npm run dev
```

Backend runs at:

``` bash
http://localhost:8080
```
🏗️ Architecture Overview

The backend follows an MVC structure:
``` bash
server/
 ├── config/
 │     └── db.ts
 │
 ├── models/
 │
 ├── controllers/
 │
 ├── routes/
 │
 ├── middleware/
 │     └── errorMiddleware.ts
 │
 ├── uploads/
 │
 ├── app.ts
 └── server.ts
```
🚀 Deployment

Backend deployed on Railway
Database hosted on MongoDB Atlas

👨‍💻 Author

Madesh M
MERN Stack Developer

