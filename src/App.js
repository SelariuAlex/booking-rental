import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from 'shared/Header';
import RentalListing from 'components/rental/rental-listing/RentalListing';
import RentalDetail from 'components/rental/rental-detail/RentalDetail';
import Login from './components/login/Login';
import Register from './components/register/Register';
import * as actions from 'actions';

import 'App.css';

const store = require('./reducers').init();

class App extends Component {
  componentWillMount() {
    this.checkAuthState();
  }

  checkAuthState() {
    store.dispatch(actions.checkAuthState());
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" render={() => <Redirect to="/rentals" />} />
            <Route exact path="/rentals" component={RentalListing} />
            <Route exact path="/rentals/:id" component={RentalDetail} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
