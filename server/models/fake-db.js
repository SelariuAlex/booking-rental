const Rental = require('./rental');
const User = require('./user');

class FakeDb {
  constructor() {
    this.rentals = [
      {
        title: 'Nice view of park',
        city: 'Timisoara',
        street: 'Muzicescu',
        category: 'condo',
        image:
          'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
        bedrooms: 4,
        shared: true,
        description: 'Very nice condo.',
        dailyRate: 15
      },
      {
        title: 'Modern apartment in center',
        city: 'Timisoara',
        street: 'Traian',
        category: 'apartment',
        image:
          'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
        bedrooms: 1,
        shared: false,
        description: 'Nice apartment in center of the city.',
        dailyRate: 11
      },
      {
        title: 'Old house in nature',
        city: 'Remetea Mare',
        street: 'Main street nr 32',
        category: 'house',
        image:
          'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
        bedrooms: 5,
        shared: true,
        description: 'House in nature.',
        dailyRate: 23
      }
    ];

    this.users = [
      {
        username: 'Test User',
        email: 'text@gmail.com',
        password: 'testtest'
      },
      {
        username: 'Test User1',
        email: 'text1@gmail.com',
        password: 'testtest1'
      }
    ];
  }

  async cleanDb() {
    await Rental.deleteMany({});
    await User.deleteMany({});
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
