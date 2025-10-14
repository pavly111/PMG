import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SeatSelection from "../components/SeatSelection";
import "../css/BookingPage.css";

const BookingPage = () => {
  const location = useLocation();
  const { movie } = location.state || {}; // Get movie data passed from previous page
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelectSeat = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    // In a real application, you would proceed to payment here
    alert(
      `You have booked ${selectedSeats.length} seat(s) for ${
        movie.title
      }: ${selectedSeats.join(", ")}`
    );
    // Here you would typically redirect to a confirmation page or update the UI
  };

  if (!movie) {
    return <div>Movie not found. Please go back and select a movie.</div>;
  }

  const ticketPrice = 10; // Example price
  const totalPrice = selectedSeats.length * ticketPrice;

  return (
    <div className="booking-page">
      <h1>{movie.title}</h1>
      <p>Select your seats</p>
      <SeatSelection
        selectedSeats={selectedSeats}
        onSelectSeat={handleSelectSeat}
      />
      <div className="booking-summary">
        <p>Selected Seats: {selectedSeats.join(", ")}</p>
        <p>Total Price: ${totalPrice}</p>
        <button className="btn-book" onClick={handleBooking}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
