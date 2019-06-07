import React from 'react';
import { Link } from 'react-router-dom';

function RentalCard(props) {
  const rental = props.rental;

  return (
    <div className="col-md-3 col-xs-6">
      <Link to={`/rentals/${rental._id}`} className="rental-detail-link">
        <div className="card bwm-card">
          <img className="card-img-top" src={rental.image} alt={rental.title} />
          <div className="card-block">
            <h6 className={`card-subtitle ${rental.category}`}>
              {rental.shared ? 'shared' : 'whole'} {rental.category} &#183;{' '}
              {rental.city}
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
