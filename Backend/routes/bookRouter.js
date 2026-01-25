import express from 'express';
import {allBooking, newBooking, cancelBooking} from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.post('/added',newBooking )
bookRouter.get('/bookings',allBooking )
bookRouter.delete('/cancel/:id', cancelBooking)

export default bookRouter;
