import React, {useEffect} from "react";
import './Bookings.css'
import axios from "axios";
import {toast} from "react-toastify";

const Bookings = () => {
    const url = "http://localhost:4000";
    const [bookings, setBookings] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const bookList = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${url}/api/booking/bookings`);
            if(response.data.success){
                setBookings(response.data.data);
            }
            else{
                toast.error("Error loading bookings");
            }
        } catch (error) {
            console.error("Failed to load bookings:", error);
            toast.error("Failed to load bookings");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        bookList();
    }, [])


    const handleCancelBooking = async (bookingId) => {
        try {
            const response = await axios.delete(`${url}/api/booking/cancel/${bookingId}`);

            if (response.data.success) {
                setBookings(bookings.filter(booking => booking._id !== bookingId));
                toast.success("Booking cancelled successfully");
            } else {
                toast.error(response.data.message || "Failed to cancel booking");
            }
        } catch (error) {
            console.error("Failed to cancel booking:", error);
            toast.error("Failed to cancel booking");
            bookList();
        }
    };

    return (
        <div className="booking">
            <h2>All Bookings</h2>
            {loading ? (
                <p>Loading bookings...</p>
            ) : bookings.length === 0 ? (
                <p>No bookings found.</p>
            ) : (
                <div className="booking-table">
                    <div className="booking-table-format title">
                        <b>UserName</b>
                        <b>Contact</b>
                        <b>Date</b>
                        <b>Time</b>
                        <b>People</b>
                        <b>Remove</b>
                    </div>
                    {bookings.map((booking) => (
                        <div key={booking._id} className="booking-table-format">
                            <p>{booking.name}</p>
                            <p>{booking.phone}</p>
                            <p>{booking.date}</p>
                            <p>{booking.time}</p>
                            <p>{booking.people} {booking.people === 1 ? 'person' : 'people'}</p>
                            <button onClick={() => handleCancelBooking(booking._id)} className="cancel-btn">Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Bookings;
