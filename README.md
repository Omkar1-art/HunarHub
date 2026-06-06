# HunarHub – Digital Marketplace for Local Micro-Entrepreneurs

## Overview

HunarHub is a full-stack web application designed to digitally empower local micro-entrepreneurs such as cobblers, potters, tailors, artisans, and small vendors. The platform provides a centralized marketplace where entrepreneurs can showcase their skills, list products, receive service requests, and connect directly with customers.

The goal of HunarHub is to increase digital visibility, improve customer reach, and create new income opportunities for local skilled workers.

---

## Problem Statement

Millions of micro-entrepreneurs possess valuable skills but lack digital presence and customer reach. Most rely on traditional word-of-mouth marketing and local foot traffic, limiting their growth and earning potential.

HunarHub addresses this challenge by providing a digital marketplace where customers can discover local talent, purchase handmade products, and request services directly.

---

## Features

### Customer Features

* User Registration and Login
* Browse Entrepreneurs by Category
* Search and Filter Services
* View Entrepreneur Profiles
* Purchase Handmade Products
* Place Service Requests
* Order History Management
* Ratings and Feedback

### Entrepreneur Features

* Profile Management
* Service Listing Management
* Product Listing Management
* Order Management
* Service Request Management
* Availability Management
* Earnings Overview

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

* MySQL

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Deployment

* Frontend: Vercel
* Backend: Railway

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

Create a `.env` file inside the backend directory and configure:

```env
MYSQLHOST=your_host
MYSQLUSER=your_user
MYSQLPASSWORD=your_password
MYSQLDATABASE=your_database
MYSQLPORT=your_port
JWT_SECRET=your_secret_key
```

---

## Live Project Links

### GitHub Repository

https://github.com/Omkar1-art/HunarHub

### Frontend Deployment

https://frontend-smoky-six-39.vercel.app/

### Backend Deployment

https://hunarhubap-production.up.railway.app/

---

## Future Enhancements

* Mobile Application Support
* Online Payment Integration
* Wallet System
* Delivery Tracking
* AI-Based Recommendations
* Skill Training Modules
* Certification System

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
