import React, { Component } from 'react';
import { RentalDetailInfo } from './RentalDetailInfo';
import RentalUpdate from './RentalUpdate';
import RentalMap from './RentalMap';
import Booking from '../../booking/Booking';

import { connect } from 'react-redux';
import * as actions from 'actions';

class RentalDetail extends Component {
  componentWillMount() {
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rentalId));
  }

  renderRentalDetail = (rental, errors) => {
    const { isUpdate } = this.props.location.state || false;

    return isUpdate ? (
      <RentalUpdate
        dispatch={this.props.dispatch}
        rental={rental}
        errors={errors}
      />
    ) : (
      <RentalDetailInfo rental={rental} />
    );
  };

  render() {
    const { rental, errors } = this.props;

    if (rental._id) {
      return (
        <section id="rentalDetails">
          <div className="upper-section">
            <div className="row">
              <div className="col-md-6">
                <img src={rental.image} alt="" />
              </div>
              <div className="col-md-6">
                <RentalMap location={`${rental.city}, ${rental.street}`} />
              </div>
            </div>
          </div>

          <div className="details-section">
            <div className="row">
              <div className="col-md-8">
                {this.renderRentalDetail(rental, errors)}
              </div>
              <div className="col-md-4">
                <Booking rental={rental} />
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

function mapStateToProps(state) {
  return {
    rental: state.rental.data,
    errors: state.rental.errors
  };
}

export default connect(mapStateToProps)(RentalDetail);
