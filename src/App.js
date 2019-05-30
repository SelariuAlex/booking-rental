import React from 'react';
import Header from './shared/Header';
import RentalList from './components/rental/RentalList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <RentalList />
      </div>
    </div>
  );
}

export default App;
