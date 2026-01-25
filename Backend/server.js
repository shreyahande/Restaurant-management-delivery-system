import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'dotenv/config.js'
import { connectDB } from './config/db.js';
import foodRoutes from './routes/foodRoute.js';
import bookRouter from "./routes/bookRouter.js";
import userRoute from "./routes/userRoute.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send('API Working');
})

// DB connection
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error("Failed to connect to the database. Server not started:", err);
        process.exit(1);
    });

// Routes
app.use('/api/food', foodRoutes);
app.use('/images', express.static('uploads'));
app.use('/api/booking', bookRouter);
app.use('/api/user',userRoute)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


//mongodb+srv://stack:22223333@cluster0.hxscaxk.mongodb.net/?
//mongodb+srv://fullstack:<db_password>@cluster0.2zjvcvt.mongodb.net/?
