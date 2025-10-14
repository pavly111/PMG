import React from "react";
import "../css/BookingPage.css";

const Seat = ({ seatNumber, status, onSelect }) => {
  const onSeatClick = () => {
    if (status !== "booked") {
      onSelect(seatNumber);
    }
  };

  return <div className={`seat ${status}`} onClick={onSeatClick}></div>;
};

const SeatSelection = ({ selectedSeats, onSelectSeat }) => {
  const rows = 6;
  const cols = 12;
  // In a real app, this would come from a database
  const bookedSeats = ["A3", "A4", "B5", "C8", "F10", "F11"];

  const renderSeats = () => {
    let seatGrid = [];
    for (let i = 0; i < rows; i++) {
      const rowChar = String.fromCharCode(65 + i);
      let rowSeats = [];
      for (let j = 1; j <= cols; j++) {
        const seatNumber = `${rowChar}${j}`;
        let status = "available";
        if (bookedSeats.includes(seatNumber)) {
          status = "booked";
        } else if (selectedSeats.includes(seatNumber)) {
          status = "selected";
        }
        rowSeats.push(
          <Seat
            key={seatNumber}
            seatNumber={seatNumber}
            status={status}
            onSelect={onSelectSeat}
          />
        );
      }
      seatGrid.push(
        <div key={rowChar} className="seat-row">
          {rowSeats}
        </div>
      );
    }
    return seatGrid;
  };

  return (
    <div className="seat-selection">
      <div className="screen"></div>
      <div className="seat-grid">{renderSeats()}</div>
      <div className="legend">
        <div className="legend-item">
          <div className="seat available"></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="seat selected"></div>
          <span>Selected</span>
        </div>
        <div className="legend-item">
          <div className="seat booked"></div>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
