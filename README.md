# 🍽️ Restaurant Management & Delivery System

A **full-stack restaurant management and food delivery system** featuring user authentication, food ordering, order tracking, table reservations, backend APIs, database integration, and an admin dashboard for managing items, orders, and bookings.

🔗 **Live Demo of Frontend:** [https://restaurant-management-delivery-syst.vercel.app/](https://restaurant-management-delivery-syst.vercel.app/)                           
🔗 **Live Demo of Admin:** [https://restaurant-management-delivery-system-admin-ar53hjaf5.vercel.app](https://restaurant-management-delivery-system-admin-ar53hjaf5.vercel.app)

🔗 **Live Demo of Backend:** [https://restaurant-management-delivery-system.onrender.com](https://restaurant-management-delivery-system.onrender.com) 
**⚠️Note**: Backend is hosted on Render (Free Tier). First request may take a few seconds due to cold start.

---

## 🚀 Features

* User authentication (JWT-based)
* Food ordering & cart management
* Order placement and tracking
* Table booking / reservation system
* Secure online payments using Stripe
* Admin dashboard for managing items and orders
* RESTful backend APIs
* MongoDB database integration

---

## 🛠️ Tech Stack

**Frontend**

* React
* Vite
* React Router
* Context API

**Backend**

* Node.js
* Express.js
* MongoDB
* Stripe API
* JWT Authentication

---

## 📂 Project Structure

```
Frontend/        # React frontend
  └─ src/
     ├─ components/
          ├─ AppDownload
          ├─ book
          ├─ FoodDisplay
          ├─ FoodItem
          ├─ Footer
          ├─ Header
          ├─ Login
          ├─ Navbar
          ├─ Offer
          ├─ OrderDisplay
          └─ Resto
     ├─Context
          └─ StoreContext.jsx
     ├─ pages/
     └─ assets/    //contain images

Backend/  # Node.js & Express backend
   ├─ controllers/
   ├─ config/   //databse connection
   ├─ middleware/
   ├─ models/
   ├─ routes/
   ├─ uploads/
   └─ assets/

Admin/           # Admin panel interface
   └─ src
       ├─ assets
       ├─ components
            ├─ Navbar
            └─ Sidebar
       └─ pages
            ├─ Add
            ├─ Booking
            ├─ List
            └─ Orders    
```

---

## ▶️ How to Run the Application

### ✅ Prerequisites

* Node.js (v18+ recommended)
* npm
* MongoDB Atlas account
* Stripe account

---

### 🔧 Common Error Fix

If you see the following error:

```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".jsx"
```

**Reason:** Node.js cannot directly execute JSX files. JSX must be handled by a bundler like **Vite**.

---
---
**⚠️ Note: Some features and database data will not be visible unless the backend server is running.**

### ▶️ Correct Way to Run

#### Option 1: Using Batch File (Windows)

* Double‑click `run_app.bat` in the root directory
* This starts the Vite development server

#### Option 2: Manual Method

```bash
npm create vite@latest
npm install react-router-dom
cd Frontend
npm install
npm run dev
```

```bash
npm install express mongoose jsonwebtoken bcryptjs cors dotenv stripe
cd Backend
npm install
npm run Server
```


## 🧪 Environment Variables

Create a `.env` file in the **Backend** directory:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
```

---

## 👥 Contributors

* @shreyahande
---


⭐ If you like this project, don’t forget to **star the repository**!
