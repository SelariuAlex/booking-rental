import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

class BookingManage extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchUserBookings());
  }

  render() {
    const { userBookings } = this.props;

    return (
      <div>
        {userBookings.data.map((booking, index) => {
          return (
            <p key={index}>
              {booking.startAt} - {booking.endAt}
            </p>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userBookings: state.userBookings
  };
}

export default connect(mapStateToProps)(BookingManage);
