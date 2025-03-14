# Social Network API

## Description

A robust API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. Built using Express.js for routing, MongoDB as the database, and Mongoose as the ODM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Demo Video](#demo-video)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running:
   ```
   npm install
   ```
3. Ensure MongoDB is installed and running on your machine.

## Usage

1. Start the server by running:
   ```
   npm start
   ```
   Or, to run in development mode with nodemon:
   ```
   npm run dev
   ```
2. Use an API testing tool like Insomnia or Postman to test the API routes.

## API Routes

### User Routes

- **GET /api/users** - Get all users
- **GET /api/users/:userId** - Get a single user by their ID
- **POST /api/users** - Create a new user
  ```json
  {
    "username": "janedoe",
    "email": "janedoe@ME.com" 
  }
  ```
- **PUT /api/users/:userId** - Update a user by their ID
- **DELETE /api/users/:userId** - Delete a user by their ID (also removes their thoughts)

### Friend Routes

- **POST /api/users/:userId/friends/:friendId** - Add a friend to a user's friend list
- **DELETE /api/users/:userId/friends/:friendId** - Remove a friend from a user's friend list

### Thought Routes

- **GET /api/thoughts** - Get all thoughts
- **GET /api/thoughts/:thoughtId** - Get a single thought by its ID
- **POST /api/thoughts** - Create a new thought
  ```json
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  }
  ```
- **PUT /api/thoughts/:thoughtId** - Update a thought by its ID
- **DELETE /api/thoughts/:thoughtId** - Delete a thought by its ID

### Reaction Routes

- **POST /api/thoughts/:thoughtId/reactions** - Add a reaction to a thought
  ```json
  {
    "reactionBody": "I love this thought!",
    "username": "lernantino"
  }
  ```
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId** - Remove a reaction from a thought

## Demo Video

[Click here to view the demonstration video](your-demo-link-here)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript Date Methods