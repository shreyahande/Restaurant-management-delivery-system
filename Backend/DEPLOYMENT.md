# Backend Deployment Guide

This guide provides instructions for deploying the backend of the Restaurant Management Delivery System.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or another MongoDB provider)
- GitHub account
- Account on a hosting platform (Heroku, Vercel, Render, etc.)

## Environment Variables

Before deploying, you need to set up the following environment variables:

- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Secret key for JWT authentication
- `STRIPE_SECRET_KEY`: Your Stripe API key for payment processing
- `PORT`: Port number (usually set automatically by the hosting platform)

## Preparing for Deployment

1. Make sure your code is ready for production:
   - All environment variables are properly configured
   - The application runs without errors locally
   - All sensitive information is stored in environment variables, not hardcoded

2. Update your `.env` file with your production values, but **DO NOT** commit this file to GitHub.

3. Use the `.env.example` file as a template for the required environment variables.

## Deploying to GitHub

1. Create a new repository on GitHub or use an existing one.

2. Initialize Git in your project folder (if not already done):
   ```
   git init
   ```

3. Add your files to Git:
   ```
   git add .
   ```

4. Commit your changes:
   ```
   git commit -m "Prepare backend for deployment"
   ```

5. Add your GitHub repository as a remote:
   ```
   git remote add origin https://github.com/yourusername/your-repo-name.git
   ```

6. Push your code to GitHub:
   ```
   git push -u origin main
   ```
   (Use `master` instead of `main` if that's your default branch)

## Deployment Options

### Option 1: Deploying to Heroku

1. Create a Heroku account if you don't have one.

2. Install the Heroku CLI and log in:
   ```
   heroku login
   ```

3. Create a new Heroku app:
   ```
   heroku create your-app-name
   ```

4. Set up environment variables on Heroku:
   ```
   heroku config:set MONGODB_URI="your_mongodb_uri"
   heroku config:set JWT_SECRET="your_jwt_secret"
   heroku config:set STRIPE_SECRET_KEY="your_stripe_key"
   ```

5. Push your code to Heroku:
   ```
   git push heroku main
   ```

6. Open your app:
   ```
   heroku open
   ```

### Option 2: Deploying to Vercel

1. Create a Vercel account and install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```
   vercel login
   ```

3. Deploy your app:
   ```
   vercel
   ```

4. Follow the prompts to set up your project.

5. Set up environment variables in the Vercel dashboard.

### Option 3: Deploying to Render

1. Create a Render account.

2. Create a new Web Service and connect your GitHub repository.

3. Configure the service:
   - Build Command: `npm install`
   - Start Command: `npm start`

4. Add environment variables in the Render dashboard.

5. Deploy the service.

## Continuous Deployment

For continuous deployment, connect your GitHub repository to your hosting platform:

1. Set up automatic deployments from your GitHub repository.
2. Configure the deployment to trigger on pushes to the main branch.
3. Ensure environment variables are properly set up in your hosting platform.

## Troubleshooting

- If your app fails to start, check the logs on your hosting platform.
- Verify that all environment variables are correctly set.
- Make sure your MongoDB connection is working properly.
- Check for any dependencies that might be missing in your package.json.

## Testing Your Deployment

After deployment, test your API endpoints to ensure everything is working correctly:

1. Use a tool like Postman or curl to test your API endpoints.
2. Verify that your frontend can connect to the deployed backend.
3. Check for any CORS issues that might arise when connecting from your frontend.