import React from 'react';
import { Link } from 'react-router-dom';
import { rentalType } from 'helpers';

function RentalCard(props) {
  const rental = props.rental;

  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
      <Link to={`/rentals/${rental._id}`} className="rental-detail-link">
        <div className="card bwm-card">
          <img className="card-img-top" src={rental.image} alt={rental.title} />
          <div className="card-block">
            <h6 className={`card-subtitle ${rental.category}`}>
              {rentalType(rental.shared)} {rental.category} &#183; {rental.city}
            </h6>
            <h4 className="card-title">{rental.title}</h4>
            <p className="card-text">
              ${rental.dailyRate} per Night &#183; Free Cancelation
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RentalCard;
