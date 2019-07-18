import React, { Component } from 'react';
import * as actions from '../../../actions';

class RentalManage extends Component {
  state = {
    userRentals: [],
    errors: []
  };

  componentWillMount() {
    actions
      .getUserRentals()
      .then(
        userRentals => this.setState({ userRentals }),
        errors => this.setState({ errors })
      );
  }

  render() {
    const { userRentals } = this.state;
    return (
      <div>
        {userRentals.map((rental, index) => (
          <p key={index}>{rental.title}</p>
        ))}
      </div>
    );
  }
}

export default RentalManage;
