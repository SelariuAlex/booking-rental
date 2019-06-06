import {
  FETCH_RENTALS,
  FETCH_RENTAL_BY_ID_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT
} from './types';

const rentals = [
  {
    id: '1',
    title: 'Central Apartment 1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
    title: 'Central Apartment 4',
    city: 'Timisoara',
    street: '1 Decembrie',
    category: 'house',
    image: 'http://via.placeholder.com/350x250',
    bedrooms: 3,
    description: 'Very nice apartment',
    dailyRate: 33,
    shared: true,
    createdAt: '24/12/2017'
  }
];

const fetchRentalByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  };
};

const fetchRentalByIdSuccess = rental => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    rental
  };
};

export const fetchRentals = () => {
  return {
    type: FETCH_RENTALS,
    rentals: rentals
  };
};

export const fetchRentalById = rentalId => {
  return function(dispatch) {
    dispatch(fetchRentalByIdInit());

    setTimeout(() => {
      const rental = rentals.find(rental => rental.id === rentalId);
      dispatch(fetchRentalByIdSuccess(rental));
    }, 1000);
  };
};