# Ecommerce Web Application
A full-stack ecommerce web application built using Next.js for the frontend, MySQL for the database, and Cloudinary for image storage. The application includes essential ecommerce functionalities such as product management, user authentication, a shopping cart, and Stripe integration for payments.

## Table of Contents
- Features
- Tech Stack
- Installation
- Environment Variables
- Database Setup
- Running the Project
- Folder Structure
- API Endpoints
- Testing
- Deployment
## Features
- User registration and authentication (Firebase)
- Admin dashboard for managing products, orders and users
- CRUD operations for products
- File upload integration with Cloudinary
- Shopping cart with localStorage
- Secure payments with Stripe
- Order management system for users and admins
- Responsive design with Tailwind CSS
## Tech Stack
### Frontend

- Next.js - React Framework
- Tailwind CSS - Utility-first CSS framework
- React Toastify - Notifications
- Material Tailwind
- Material Icons, Font Awesome, React Icons etc 
### Backend

- MySQL - Database
- Next.js API Routes - API backend
- Cloudinary - Image storage

- Stripe - Payment processing
- Stripe Webhooks - Payments record and orders tracking
## Installation
### Clone the repository:

```bash
git clone https://github.com/intZaibi/Ecommerce.git
cd Ecommerce
```
### Install the dependencies:

```bash
npm install
```
### Create a .env.local file based on .env.example and add the required environment variables (see below).

- Environment Variables
``` bash
DATABASE_URL=mysql://user:password@localhost:3306/ecommerce_db
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
```
- Database Setup\
Ensure MySQL is installed.

*Create a new MySQL database:*
```bash
CREATE TABLE allproducts (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    CategoryID INT,
    Price DECIMAL(10,2) NOT NULL,
    ImageURLs JSON,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (CategoryID) REFERENCES categories(CategoryID)
);

CREATE TABLE categories (
    CategoryID INT AUTO_INCREMENT PRIMARY KEY,
    CategoryName VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE contactform (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Phone VARCHAR(20),
    Objective VARCHAR(200),
    Message TEXT NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_email VARCHAR(255) NOT NULL,
    product_data JSON NOT NULL,
    amount_total DECIMAL(10,2) NOT NULL,
    Status VARCHAR(45) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE specifications (
    ProductID INT,
    Storage JSON,
    RAM JSON,
    Color JSON,
    FOREIGN KEY (ProductID) REFERENCES allproducts(ProductID)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    address JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```

Running the Project

Start the development server:

```bash
npm run dev
```
The app will be available at http://localhost:3000.

To build the project for production:

```bash
npm run build
npm start
```
## Folder Structure:

/components      # Reusable React components\
/pages           # Next.js pages (API routes and frontend pages)\
/public          # Static files (images, fonts, etc.)\
/styles          # Global styles and Tailwind CSS configuration\
/lib             # Utility functions (e.g., Cloudinary, Stripe integration)\
/db              # Database configuration and migration scripts\
## API Endpoints
- Product Management
GET /api/products - Retrieve all products\
POST /api/products - Add a new product (Admin only)\
PUT /api/products/:id - Update a product (Admin only)\
DELETE /api/products/:id - Delete a product (Admin only)\
- User Authentication
POST /api/auth/register - Register a new user\
POST /api/auth/login - Log in an existing user\
POST /api/auth/logout - Log out a user\
- Cart
POST /api/cart - Add a product to the cart\
GET /api/cart - Retrieve the cart details\
- Testing
To run tests for this project:

```bash
npm run test
```
## Deployment

This project is deployed on Vercel.

https://vercel.live/link/ecommerce-eight-mocha.vercel.app

# Copyright

Copyright @intZaibi -2024
