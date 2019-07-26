import {
  FETCH_RENTAL_BY_ID_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTALs_SUCCESS,
  FETCH_RENTALS_INIT,
  FETCH_RENTALS_FAIL,
  UPDATE_RENTAL_SUCCESS,
  UPDATE_RENTAL_FAIL
} from '../actions/types';

const initialState = {
  rentals: {
    data: [],
    errors: []
  },
  rental: {
    data: {},
    errors: []
  }
};

export const rentalReducer = (state = initialState.rentals, action) => {
  switch (action.type) {
    case FETCH_RENTALS_INIT:
      return { ...state, data: [], errors: [] };
    case FETCH_RENTALs_SUCCESS:
      return { ...state, data: action.rentals };
    case FETCH_RENTALS_FAIL:
      return { ...state, errors: action.errors, data: [] };
    default:
      return state;
  }
};

export const selectedRentalReducer = (state = initialState.rental, action) => {
  switch (action.type) {
    case FETCH_RENTAL_BY_ID_INIT:
      return { ...state, data: {} };
    case FETCH_RENTAL_BY_ID_SUCCESS:
      return { ...state, data: action.rental };
    case UPDATE_RENTAL_SUCCESS:
      return { ...state, data: action.rental };
    case UPDATE_RENTAL_FAIL:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};
