# ShoppyGlobe E-commerce API

## Project Overview

ShoppyGlobe is a backend API for an E-commerce application built using Node.js, Express, and MongoDB. This API allows users to manage products, handle shopping cart functionality, and implement user authentication through JWT (JSON Web Tokens).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing-with-thunderclient)

## Features

- User registration and login with JWT authentication
- Product management (CRUD operations)
- Shopping cart functionality (add, update, delete products)
- Input validation and error handling

## Installation

1. **Clone the Repository**:

   git clone https://github.com/nitishranjan27/shoppyglobe_backend

2. **Install Dependencies**:

    npm install

3. **Environment Variables**: Create a .env file in the root directory and add your MongoDB connection string:

    MongoDB_URL = "mongodb://localhost:27017/ShoppyGlobe"
    Jwt_secret_key = "MySecretKey123"
    PORT = 5000

4. Run the Application:

    npm start

5. The API should be running on http://localhost:5000.

## Usage

The API has various endpoints that can be used to interact with the application. Ensure to obtain a JWT token by registering or logging in to access protected routes.

## Testing with ThunderClient

 **Use ThunderClient to test the API endpoints**:

    - User Registration: Test the registration endpoint with valid user data.
    - User Login: Use the login endpoint to get a JWT token.
    - Product Operations: Test adding, fetching, updating, and deleting products using the appropriate endpoints.
    - Cart Operations: Test adding to the cart, updating quantities, and deleting items from the cart.