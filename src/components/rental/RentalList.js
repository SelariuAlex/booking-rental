import React, { Component } from 'react';
import RentalCard from './RentalCard';

class RentalList extends Component {
  state = {
    rentals: [1, 2, 3]
  };

  renderRentals() {
    return this.state.rentals.map(rental => {
      return <RentalCard key={Math.random()} />;
    });
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home</h1>
        <div className="row">{this.renderRentals()}</div>
      </section>
    );
  }
}

export default RentalList;
