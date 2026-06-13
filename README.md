# HunarHub – Digital Marketplace for Local Micro-Entrepreneurs

## Overview

HunarHub is a full-stack web application designed to digitally empower local micro-entrepreneurs such as cobblers, potters, tailors, artisans, and small vendors. The platform provides a centralized marketplace where entrepreneurs can showcase their skills, list products, receive service requests, and connect directly with customers.

The goal of HunarHub is to increase digital visibility, improve customer reach, and create new income opportunities for local skilled workers.

---

## Problem Statement

Millions of micro-entrepreneurs possess valuable skills but lack digital presence and customer reach. Most rely on traditional word-of-mouth marketing and local foot traffic, limiting their growth and earning potential.

HunarHub solves this by creating a digital marketplace where customers can discover local talent, buy handmade products, and book services directly.

---

## Features

### Customer Features

* User Registration and Login
* Browse Products and Services
* Search and Filter Options
* View Entrepreneur Profiles
* Purchase Handmade Products
* Book Local Services
* Order History Management
* Ratings and Feedback

### Entrepreneur Features

* Profile Management
* Product Listing Management
* Service Listing Management
* Order Management
* Availability Management
* Earnings Tracking

### Admin Features

* Entrepreneur Verification
* Category Management
* Order Monitoring
* Complaint Handling
* Platform Analytics

---

## Technology Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Vite

### Backend

* Node.js
* Express.js

### Database

* MySQL (Railway Database)

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Deployment

* Frontend: Vercel
* Backend: Vercel
* Database: Railway MySQL

---

## Project Structure

```text
HunarHub
│
├── backend
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── server.js
│   ├── vercel.json
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   └── styles
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── vercel.json
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Omkar1-art/HunarHub.git
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the backend directory:

```env
MYSQL_PUBLIC_URL=your_mysql_connection_url
JWT_SECRET=your_secret_key
```

Example:

```env
MYSQL_PUBLIC_URL=mysql://username:password@host:port/database
JWT_SECRET=mysecretkey
```

---

## Live Project Links

### GitHub Repository

https://github.com/Omkar1-art/HunarHub

### Frontend Deployment

https://frontend-smoky-six-39.vercel.app/

### Backend API

https://backend-sigma-five-50.vercel.app/

---

## API Endpoints

### Products

```bash
GET /api/products
```

### Services

```bash
GET /api/services
```

### Authentication

```bash
POST /api/login
POST /api/register
```

---

## Future Enhancements

* Online Payment Integration
* Mobile Application Support
* Delivery Tracking
* Wallet System
* AI-Based Recommendations
* Certification System
* Skill Training Modules

---

## Expected Impact

* Increased income opportunities for local entrepreneurs
* Better digital visibility for skilled workers
* Promotion of handmade and local products
* Community-driven economic growth
* Digital inclusion of small businesses

---

## Author

**Omkar Sawant**

MCA Project Submission

---

## License

This project is developed for educational and internship learning purposes.
