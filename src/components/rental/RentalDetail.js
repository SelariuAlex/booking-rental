import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class RentalDetail extends Component {
  componentWillMount() {
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rentalId));
  }

  render() {
    const rental = this.props.rental;
    console.log(this.props);

    return (
      <div>
        <h1>{'nu merge'} </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rental: state.rental.data
  };
}

export default connect(mapStateToProps)(RentalDetail);
