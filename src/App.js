import React from 'react';
import Header from './shared/Header';
import RentalCard from './components/rental/RentalCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <section id="rentalListing">
          <h1 className="page-title">Your Home</h1>
          <div className="row">
            <RentalCard />
            <RentalCard />
            <RentalCard />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
