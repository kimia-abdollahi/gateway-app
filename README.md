# Gateway App

A simple Node.js application that serves as a gateway and user management system which is written by Kimia

## Features
- User authentication and authorization using JWT.
- MongoDB integration for user data storage.
- Microservices structure for scalability.
- Environment variables for configuration.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kimia-abdollahi/gateway-app.git

2. Navigate to the project directory:
cd <project-directory>

3. Install dependencies:
npm install

4. Set up the .env file:
PORT=3000
DB_URI=mongodb://localhost:27017/gatewayApp
JWT_SECRET=your-secret-key


## Usage

1. Start MongoDB server:
mongod

2. Run the application:
node app.js

## Testing

You can use tools like Postman or Curl to test the endpoints:

Login: POST /login
Create User: POST /users
Get Users: GET /users

## Project Structure

new1Project/
│
├── database/
│   └── models/
│       └── userModel.js
│
├── gateway/
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   └── auth.js
│   └── server.js
│
├── services/
│   └── service1/
│       └── server.js
│
├── .env (not included in repo)
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── test.js
