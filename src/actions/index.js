import axios from 'axios';

import {
  FETCH_RENTALs_SUCCESS,
  FETCH_RENTAL_BY_ID_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT
} from './types';

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

const fetchRentalsSuccess = rentals => {
  return {
    type: FETCH_RENTALs_SUCCESS,
    rentals
  };
};

export const fetchRentals = () => {
  return dispatch => {
    axios.get('http://localhost:3001/api/v1/rentals').then(rentals => {
      dispatch(fetchRentalByIdSuccess(rentals));
    });
  };
};

export const fetchRentalById = rentalId => {
  return function(dispatch) {
    dispatch(fetchRentalByIdInit());

    axios
      .get(`http://localhost:3001/api/v1/rentals/${rentalId}`)
      .then(rental => {
        dispatch(fetchRentalByIdSuccess(rental));
      });
  };
};
