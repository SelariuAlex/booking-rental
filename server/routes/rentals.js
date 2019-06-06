const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', (req, res) => {
  Rental.find({}, (err, foundRentals) => {
    res.json(foundRentals);
  });
});

router.get('/:id', (req, res) => {
  const rentalId = req.params.id;
  Rental.findById(rentalId, (err, foundRentals) => {
    if (err) {
      res.status(422).send({
        errors: [{ title: 'rental Error', detail: 'Could not fin Rental' }]
      });
    }

    res.json(foundRentals);
  });
});

module.exports = router;
