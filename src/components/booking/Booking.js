import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { log } from 'util';

class Booking extends Component {
  componentWillMount() {
    this.getBookedOutDates();
  }

  getBookedOutDates() {
    const { bookings } = this.props.rental;

    if (bookings && bookings.length > 0) {
      bookings.forEach(booking => {
        console.log(booking);
      });
    }
  }

  render() {
    const { rental } = this.props;
    return (
      <div className="booking">
        <h3 className="booking-price">
          $ {rental.dailyRate}
          <span className="booking-per-night">per night</span>
        </h3>
        <hr />
        <div className="form-group">
          <label htmlFor="dates">Dates</label>
          <DateRangePicker
            onApply={this.handleApply}
            isInvalidDate={this.checkInvalidDates}
            opens="left"
            containerStyles={{ display: 'block' }}
          >
            <input
              ref={this.dateRef}
              id="dates"
              type="text"
              className="form-control"
            />
          </DateRangePicker>
        </div>
        <div className="form-group">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            className="form-control"
            id="guests"
            aria-describedby="emailHelp"
            placeholder=""
          />
        </div>
        <button className="btn btn-bwm btn-confirm btn-block">
          Reserve place now
        </button>
        <hr />
        <p className="booking-note-title">
          People are interested into this house
        </p>
        <p className="booking-note-text">
          More than 500 people checked this rental in last month.
        </p>
      </div>
    );
  }
}

export default Booking;