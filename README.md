# To-Do Manager (Full-Stack Dockerized Application)

A full-stack To-Do Manager application built with React, Node.js (Express), MongoDB, and Docker.  
This project demonstrates a distributed system with separated frontend, backend, and database services.

---

## Features

- Create, read, update, and delete tasks
- Mark tasks as completed or uncompleted
- Persistent storage using MongoDB
- REST API for task management
- Frontend and backend communication via Axios
- Fully containerized using Docker and Docker Compose

---

## Architecture

React Frontend --> Express Backend --> MongoDB
Port 3000 Port 5000 Port 27017


Each service runs independently in its own container.

---

## Tech Stack

Frontend:
- React
- Axios
- Nginx (production build)

Backend:
- Node.js
- Express.js
- Mongoose
- MongoDB

DevOps:
- Docker
- Docker Compose
- Git & GitHub

---

## Project Structure

ds_project/

├── backend/

│ ├── models/

│ ├── routes/

│ ├── server.js

│ ├── Dockerfile

│ └── .env

│

├── todo-manager/

│ ├── src/

│ │ ├── components/

│ │ ├── services/

│ │ ├── App.jsx

│ │ └── index.js

│ └── Dockerfile

│

├── docker-compose.yml

└── README.md



---

## Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/todo_db

## Run with docker

docker-compose up --build

## Stop container

docker-compose down
