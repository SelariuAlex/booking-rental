const Rental = require('./rental');
const User = require('./user');
const fakedbData = require('./data.json');
const Booking = require('./booking');

class FakeDb {
  constructor() {
    this.rentals = fakedbData.rentals;
    this.users = fakedbData.users;
  }

  async cleanDb() {
    await Rental.deleteMany({});
    await User.deleteMany({});
    await Booking.deleteMany({});
  }

  pushDataTodb() {
    const user = new User(this.users[0]);
    const user2 = new User(this.users[1]);

    this.rentals.forEach(rental => {
      const newRental = new Rental(rental);
      newRental.user = user;
      user.rentals.push(newRental);
      newRental.save();
    });
    user.save();
    user2.save();
  }

  async seedDb() {
    await this.cleanDb();
    this.pushDataTodb();
  }
}

module.exports = FakeDb;
