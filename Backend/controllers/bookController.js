import bookModel from "../models/bookModel.js";
import dotenv from 'dotenv';

dotenv.config();

const DEBUG = false;

const newBooking  = async (req, res) => {
    try{
        const { name, phone, date, time, people } = req.body;

        DEBUG && console.log("Received booking data:", { name, phone, date, time, people });

        if (!name || !phone || !date || !time || people === undefined) {
            console.error("Missing required booking fields:", { name, phone, date, time, people });
            return res.json({
                success: false, 
                message: 'Missing required booking information' 
            });
        }

        if (isNaN(people) || people <= 0) {
            console.error("Invalid number of people:", people);
            return res.json({
                success: false, 
                message: 'Number of people must be a positive number' 
            });
        }

        const dateParts = date.split('-');
        const selectedDate = new Date(
            parseInt(dateParts[0]),
            parseInt(dateParts[1]) - 1,
            parseInt(dateParts[2])
        );

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        DEBUG && console.log("Date comparison:", {
            receivedDate: date,
            parsedSelectedDate: selectedDate.toISOString(),
            today: today.toISOString(),
            comparison: selectedDate < today
        });

        if (selectedDate < today) {
            console.error("Date is in the past:", date);
            return res.json({
                success: false, 
                message: 'Please select a future date' 
            });
        }

        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(phone.replace(/[^0-9]/g, ''))) {
            console.error("Invalid phone number format:", phone);
            return res.json({
                success: false, 
                message: 'Please enter a valid phone number' 
            });
        }

        // Create and save the booking
        const newBooking  = new bookModel({
            name,
            phone,
            date,
            time,
            people
        });

        try {
            await newBooking.save();
            DEBUG && console.log("Booking saved successfully:", newBooking._id);
            res.json({ 
                success: true, 
                message: 'Reservation Successfully Confirmed',
                bookingId: newBooking._id,
                bookingDetails: {
                    name,
                    date,
                    time,
                    people
                }
            });
        } catch (saveError) {
            console.error("Database save error:", saveError);

            if (saveError.name === 'MongooseServerSelectionError' || 
                saveError.name === 'MongoNetworkError') {
                return res.status(503).json({ 
                    success: false, 
                    message: 'Database connection issue. Please try again later.' 
                });
            }
            throw saveError;
        }
    }catch(err){
        console.error("Error saving booking:", err);

        if (err.name === 'ValidationError') {
            const validationErrors = Object.values(err.errors).map(error => error.message);
            return res.json({
                success: false, 
                message: 'Validation error', 
                errors: validationErrors 
            });
        }

        if (err.code === 11000) {
            return res.json({
                success: false, 
                message: 'A booking with this information already exists' 
            });
        }

        res.json({ success: false, message: 'Error Saving Booking', error: err.message });
    }
}

const allBooking = async (req, res) => {
    try{
        const booking = await bookModel.find().sort({date: 1, time: 1});
        DEBUG && console.log(`Successfully loaded ${booking.length} bookings`);
        res.json({ success: true, data: booking });
    }catch(err){
        console.error("Failed to load allBooking:", err);
        res.json({ success: false, message: 'Error Loading Bookings', error: err.message });
    }
}

const cancelBooking = async (req, res) => {
    try {
        const bookingId = req.params.id;

        if (!bookingId) {
            return res.json({success: false, message: 'Booking ID is required'});
        }
        const booking = await bookModel.findById(bookingId);

        if (!booking) {
            return res.json({success: false, message: 'Booking not found'});
        }

        await bookModel.findByIdAndDelete(bookingId);

        res.json({success: true, message: 'Booking Cancelled', cancelBooking:bookingId});
    } catch (error) {
        console.error("Failed to cancel booking:", error);
        res.json({success: false, message: 'Error Canceling Booking', error: error.message});
    }
};

export {newBooking, allBooking, cancelBooking};
