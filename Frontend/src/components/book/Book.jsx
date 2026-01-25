import React, {useState} from 'react';
import './Book.css'
import {assets} from "../../assets/assets.js";
import axios from "axios";
import {toast} from "react-toastify";

const Book = () => {

    const url ="http://localhost:4000"

    const [book, setBook] = useState({
        name: "",
        phone:"",
        date: "",
        time: "",
        people: "1 person",
    });

    const onChangeBook = (event) => {
        const { name, value } = event.target;
        setBook(prev => ({ ...prev, [name]: value }));
    };

    const onSubmitBook = async (event) => {
        event.preventDefault();

        if (!book.name || !book.phone || !book.date || !book.time || !book.people) {
            toast.error("Please fill in all required fields");
            return;
        }

        const dateParts = book.date.split('-');
        const selectedDate = new Date(
            parseInt(dateParts[0]),
            parseInt(dateParts[1]) - 1,
            parseInt(dateParts[2])
        );

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        console.log("Frontend date comparison:", {
            inputDate: book.date,
            parsedSelectedDate: selectedDate.toISOString(),
            today: today.toISOString(),
            comparison: selectedDate < today
        });

        if (selectedDate < today) {
            toast.error("Please select a future date");
            return;
        }

        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(book.phone.replace(/[^0-9]/g, ''))) {
            toast.error("Please enter a valid phone number");
            return;
        }

        let peopleCount;
        if (book.people.includes('+')) {
            peopleCount = 5;
        } else {
            peopleCount = parseInt(book.people.split(' ')[0]);
        }

        if (isNaN(peopleCount) || peopleCount <= 0) {
            toast.error("Invalid number of people selected");
            return;
        }

        const bookingData = {
            name: book.name,
            phone: book.phone,
            date: book.date,
            time: book.time,
            people: peopleCount
        };

        try {
            console.log("Submitting booking data:", bookingData);
            const response = await axios.post(`${url}/api/booking/added`, bookingData);

            if (response.data.success) {
                setBook({
                    name: "",
                    phone: "",
                    date: "",
                    time: "",
                    people: "1 person",
                });

                const details = response.data.bookingDetails || bookingData;
                toast.success("Booking Success");

                if (response.data.bookingId) {
                    console.log(`Booking reference: ${response.data.bookingId}`);
                }
            } else {
                toast.error(response.data.message || "Failed to make reservation");
            }
        } catch (error) {
            console.error("Booking error:", error);

            if (error.response) {
                const errorMessage = error.response.data.message || "Failed to make reservation";
                toast.error(errorMessage);

                if (error.response.data.errors) {
                    error.response.data.errors.forEach(err => toast.error(err));
                }
            } else if (error.request) {
                toast.error("No response from server. Please check your connection.");
            } else {
                toast.error("Failed to make reservation. Please try again.");
            }
        }
    };

    return (
        <div className="book">
            <h1>Make a Reservation</h1>
            <div className="book-form">
                <img src={assets.resto4_img} alt="Resto"/>
                <form className="reservation-form" onSubmit={onSubmitBook}>
                    <div className="form-group">
                        <div className="form-item">
                            <label>Name</label>
                            <input onChange={onChangeBook} value={book.name} name='name' type="text" placeholder="Your Name"/>
                        </div>
                        <div className="form-item">
                            <label>Phone</label>
                            <input onChange={onChangeBook} value={book.phone} name='phone' type="tel" placeholder="Phone Number"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-item">
                            <label>Date</label>
                            <input  onChange={onChangeBook} value={book.date} name='date' type="date"/>
                        </div>
                        <div className="form-item">
                            <label>Timing</label>
                            <input  onChange={onChangeBook} value={book.time} name='time' type="time"/>
                        </div>
                    </div>

                    <div className="form-select">
                        <p>How many People?</p>
                        <select  onChange={onChangeBook} value={book.people} name='people'>
                            <option>1 person</option>
                            <option>2 people</option>
                            <option>3 people</option>
                            <option>4 people</option>
                            <option>5+ people</option>
                        </select>
                    </div>
                    <div className="submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Book;
