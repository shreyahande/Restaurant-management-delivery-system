# Restaurant Management Delivery System

Full stack restaurant management and food delivery system featuring order management, user authentication, backend APIs, database and admin operations, built using Node.js.

## How to Run the Application

### Error Fix
If you're seeing an error like:
```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".jsx" for C:\path\to\main.jsx
```

This error occurs because Node.js cannot directly execute JSX files. JSX files need to be transpiled to JavaScript before they can be executed.

### Correct Way to Run the Application

**Option 1: Using the Batch File**
1. Simply double-click the `run_app.bat` file in the root directory
2. This will start the Vite development server

**Option 2: Manual Method**
1. Open a command prompt
2. Navigate to the Frontend directory:
   ```
   cd Frontend
   ```
3. Run the development server:
   ```
   npm run dev
   ```

The application should now start correctly and be accessible at http://localhost:5173 (or another port if 5173 is in use).

## Project Structure
- Frontend/ - Contains the React application
  - src/ - Source code
    - components/ - React components
    - pages/ - Page components
    - assets/ - Images and other assets
- Backend/ - Contains the Node.js server
- Admin/ - Contains the admin interface

## Technologies Used
- React
- Vite
- Node.js
- Express
- MongoDB
- React Router