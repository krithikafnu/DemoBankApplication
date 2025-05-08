# 🧾 Client Directory – MERN Stack App

This is a full-stack **Client Directory** web application built with the **MERN** stack (MongoDB, Express, React, Node.js). It allows users to:

- View a list of bank clients
- Search and filter clients by **name**, **birthday**, or **account type**
- Manage client accounts visually with a responsive UI

> Designed to demonstrate modern React styling, clean API integration, and MongoDB-backed full-stack functionality.

---

## 🚀 Features

- 🔍 Filterable, searchable table of client records
- 📦 Local mock JSON used initially, migrated to MongoDB Atlas
- 🧾 Clean React + Tailwind-style custom CSS layout
- 🌐 REST API built with Express.js and Node.js
- ☁️ MongoDB Atlas integration using Mongoose
- ♻️ Scalable project structure (MVC, routes, services, etc.)
- Lazy Loading for the UI components

---

## 📂 Folder Structure
project-root/
├── client-directory/ # React Frontend
| |--public/
| | |--assets /# Media files
│ ├── src/
│ │ ├── components/ # ClientTable, SearchForm
│ │ ├── styles/ # Custom CSS (n2.css)
│ │ └── App.jsx # Root component
├── server/ # Node.js Backend
│ ├── config/ # MongoDB connection
│ ├── models/ # Mongoose Client schema
│ ├── routes/ # Express routes (GET, search)
│ ├── seed/ # Script to seed DB from JSON
│ ├── data/ # clients.json (mock DB)
│ └── server.js # App entry point


## Backend Setup
Nodejs setup:
cd server
npm install

## Create a .env file:
MONGODB_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/clientdb

## Seed MongoDB (run it to populate mongo db):
node seed/seedClients.js

## Start the backend:
node server.js
Runs at http://localhost:5001


## Frontend Setup
cd client-directory
npm install
npm start

** Make sure package.json has the proxy set:
"proxy": "http://localhost:5001"

Runs at http://localhost:3000


## 🧪 Sample Endpoints
| Method | Endpoint                           | Description                    |
| ------ | ---------------------------------- | ------------------------------ |
| GET    | `/api/clients`                     | Get all clients                |
| GET    | `/api/clients/search?name=...`     | Filter clients by name         |
| GET    | `/api/clients/search?birthday=...` | Filter clients by birthday     |
| GET    | `/api/clients/search?type=...`     | Filter clients by account type |

## Screenshots

##🧠 Lessons Learned
Used MongoDB Atlas with Mongoose as a cloud database
Implemented modular React + CSS layout with good spacing, mobile-friendliness
Integrated RESTful search and list APIs into a clean UI
Migrated from static JSON data to MongoDB in a scalable way

## 📝 Future Improvements
Add Create / Update / Delete client APIs
Form validation and alerts
Role-based authentication
Mobile responsiveness enhancement

## 👩‍💻 Author
Krithika Fnu

Frontend Engineer | React | Node.js | MongoDB | MERN Stack Developer