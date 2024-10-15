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
- Contributing
- License
## Features
- User registration and authentication (Firebase)
- Admin dashboard for managing products and orders
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
### Backend

- MySQL - Database
- Next.js API Routes - API backend
- Cloudinary - Image storage and delivery
Payment

- Stripe - Payment processing
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
CREATE DATABASE ecommerce;

```
Run database migrations:

bash
Copy code
npm run migrate
Optionally, seed the database with initial data:

bash
Copy code
npm run seed
Running the Project
Start the development server:

bash
Copy code
npm run dev
The app will be available at http://localhost:3000.

To build the project for production:

bash
Copy code
npm run build
npm start
Folder Structure
plaintext
Copy code
/components      # Reusable React components
/pages           # Next.js pages (API routes and frontend pages)
/public          # Static files (images, fonts, etc.)
/styles          # Global styles and Tailwind CSS configuration
/lib             # Utility functions (e.g., Cloudinary, Stripe integration)
/db              # Database configuration and migration scripts
API Endpoints
Product Management
GET /api/products - Retrieve all products
POST /api/products - Add a new product (Admin only)
PUT /api/products/:id - Update a product (Admin only)
DELETE /api/products/:id - Delete a product (Admin only)
User Authentication
POST /api/auth/register - Register a new user
POST /api/auth/login - Log in an existing user
POST /api/auth/logout - Log out a user
Cart
POST /api/cart - Add a product to the cart
GET /api/cart - Retrieve the cart details
Testing
To run tests for this project:

bash
Copy code
npm run test
Deployment
This project can be deployed on Vercel. After configuring your environment variables and installing dependencies, deploy using the following command:

bash
Copy code
vercel
Alternatively, it can be deployed on any platform that supports Next.js.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

[MIT](https://choosealicense.com/licenses/mit/)
