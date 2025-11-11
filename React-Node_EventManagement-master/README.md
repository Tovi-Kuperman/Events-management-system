# Events Management System

## Overview
Events Management System is a full-stack web application for organizing and managing events. The project combines a modern React client and Node.js server to deliver a scalable, secure, and responsive platform for administrators and users.

---

## Key Features
- **Full Stack Solution:** Built with React (frontend) and Node.js (backend) for seamless user experience and robust data management.
- **Scalable Architecture:** Easily supports growing numbers of users and events thanks to modular folder structure and clear code separation.
- **User Management:** Registration, authentication, and profile management for participants and organizers.
- **Event Management:** Create, update, delete, and browse events; supports advanced search and filtering.
- **API Driven:** RESTful endpoints for integration with other services and automation.
- **Security:** Secure authentication and authorization handling on both client and server.
- **Ready to Deploy:** Well-structured for fast scaling and deployment in business environments.

---

## Project Structure

```
React-Node_EventManagement-master/
├── React_Events-client     # Frontend application (React)
└── node.js_Events-server   # Backend server (Node.js & Express)
```

- **`React_Events-client/`**: The complete React application with all UI components, state management, and API integration.
- **`node.js_Events-server/`**: REST API server with all necessary business logic, database operations, and user authentication.

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (Node package manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tovi-Kuperman/Events-management-system.git
   cd Events-management-system/React-Node_EventManagement-master
   ```

2. **Install React client dependencies:**
   ```bash
   cd React_Events-client
   npm install
   ```

3. **Install server dependencies:**
   ```bash
   cd ../node.js_Events-server
   npm install
   ```

---

### Running the Applications

- **Start the Node.js server:**
   ```bash
   npm start
   ```
   _(In directory: node.js_Events-server)_

- **Start the React client (separate terminal):**
   ```bash
   npm start
   ```
   _(In directory: React_Events-client)_

The React client will run on [http://localhost:3000](http://localhost:3000) by default and the server will run on [http://localhost:5000](http://localhost:5000) (or similar, depending on your configuration).

---

## Documentation
API usage and endpoint details are available in the backend folder.

---

## License
No license specified.