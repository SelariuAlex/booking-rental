import React, { Component } from 'react';
import RentalCard from './RentalCard';

class RentalList extends Component {
  state = {
    rentals: [
      {
        id: 1,
        title: 'Central Apartment',
        city: 'Timisoara',
        street: 'Muzicescu',
        category: 'apartment',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 3,
        description: 'Very nice apartment',
        dailyRate: 34,
        shared: false,
        createdAt: '24/12/2017'
      },
      {
        id: 2,
        title: 'Central Apartment 2',
        city: 'Remetea',
        street: 'Main street',
        category: 'condo',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 2,
        description: 'Very nice apartment',
        dailyRate: 12,
        shared: true,
        createdAt: '24/12/2017'
      },
      {
        id: 3,
        title: 'Central Apartment 3',
        city: 'Arad',
        street: 'Timisoarei',
        category: 'condo',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 2,
        description: 'Very nice apartment',
        dailyRate: 34,
        shared: true,
        createdAt: '24/12/2017'
      },
      {
        id: 4,
        title: 'Central Apartment 4',
        city: 'Timisoara',
        street: '1 Decembrie',
        category: 'house',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 9,
        description: 'Very nice apartment',
        dailyRate: 33,
        shared: true,
        createdAt: '24/12/2017'
      }
    ]
  };

  renderRentals() {
    return this.state.rentals.map(rental => {
      return <RentalCard key={Math.random()} rental={rental} />;
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
