# Restaurant Management System Backend

This is the backend for the Restaurant Management Delivery System.

## Quick Start

1. Install dependencies:
   ```
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your own values for the environment variables

3. Start the development server:
   ```
   npm run dev
   ```

4. Start the production server:
   ```
   npm start
   ```

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Deployment Steps

1. Ensure your environment variables are set up correctly in `.env`
2. Make sure your code is ready for production
3. Push your code to GitHub:
   ```
   git add .
   git commit -m "Prepare for deployment"
   git push
   ```
4. Deploy to your preferred hosting platform:
   - Heroku
   - Vercel
   - Render
   - Or any other Node.js hosting service

### Important Considerations

- **Environment Variables**: Make sure all sensitive information (database credentials, API keys) is stored in environment variables, not hardcoded in your files.
- **Database Connection**: Ensure your MongoDB connection string is properly set up in your hosting platform's environment variables.
- **CORS**: If you're deploying the backend and frontend separately, you may need to configure CORS to allow requests from your frontend domain.
- **Port**: The application will use the PORT environment variable if available, or default to 4000.

## API Endpoints

- `GET /api/food` - Get all food items
- `GET /api/booking` - Get all bookings
- `POST /api/user` - Create a new user
- `GET /api/cart` - Get cart items
- `GET /api/order` - Get orders

For more detailed API documentation, refer to the controller files in the `controllers` directory.

## Project Structure

- `config/` - Configuration files (database connection)
- `controllers/` - API route handlers
- `middleware/` - Express middleware
- `models/` - Mongoose models
- `routes/` - API routes
- `uploads/` - Uploaded files

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Stripe for payment processing
- Twilio for messaging