import React from 'react';
import { RentalAssets } from './RentalAssets';
import { rentalType } from 'helpers';
import { EditableInput } from '../../../shared/editable/EditableInput';
import * as actions from '../../../actions';

class RentalUpdate extends React.Component {
  updateRental = rentalData => {
    const {
      rental: { _id },
      dispatch
    } = this.props;

    dispatch(actions.updateRental(_id, rentalData));
  };

  render() {
    const rental = this.props.rental;

    return (
      <div className="rental">
        <h2 className={`rental-type ${rental.category}`}>
          {rentalType(rental.shared)} {rental.category}
        </h2>
        <div className="rental-owner">
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt="owner"
          />
          <span>{rental.user && rental.user.username}</span>
        </div>

        <EditableInput
          entity={rental}
          entityField={'title'}
          className={'rental-title'}
          updateEntity={this.updateRental}
        />
        <EditableInput
          entity={rental}
          entityField={'city'}
          className={'rental-city'}
          updateEntity={this.updateRental}
        />
        <EditableInput
          entity={rental}
          entityField={'street'}
          className={'rental-street'}
          updateEntity={this.updateRental}
        />
        <div className="rental-room-info">
          <span>
            <i className="fa fa-building" />
            <EditableInput
              entity={rental}
              entityField={'bedrooms'}
              className={'rental-bedrooms'}
              containerStyle={{ display: 'inline-block' }}
              updateEntity={this.updateRental}
            />{' '}
            bedrooms
          </span>
          <span>
            <i className="fa fa-user" /> {rental.bedrooms + 4} guests
          </span>
          <span>
            <i className="fa fa-bed" /> {rental.bedrooms + 2} beds
          </span>
        </div>
        <p className="rental-description">{rental.description}</p>
        <hr />
        <RentalAssets />
      </div>
    );
  }
}

export default RentalUpdate;
