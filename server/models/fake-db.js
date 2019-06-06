const Rental = require('./rental');

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
  }

  async cleanDb() {
    await Rental.deleteMany({});
  }

  pushRentalsTodb() {
    this.rentals.forEach(rental => {
      const newRental = new Rental(rental);
      newRental.save();
    });
  }

  seedDb() {
    this.cleanDb();
    this.pushRentalsTodb();
  }
}

module.exports = FakeDb;
