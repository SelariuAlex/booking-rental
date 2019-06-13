const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  usermane: {
    type: String,
    min: [3, 'Too short, min is 3 characters'],
    max: [32, 'Too long, max is 32 characters']
  },
  email: {
    type: String,
    min: [3, 'Too short, min is 3 characters'],
    max: [32, 'Too long, max is 32 characters'],
    unique: true,
    lowercase: true,
    required: 'Email is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  password: {
    type: String,
    min: [4, 'Too short, min is 4 characters'],
    max: [32, 'Too long, max is 32 characters'],
    required: 'Password is required'
  },
  rentals: [{ type: Schema.Types.ObjectId, ref: 'Rental' }]
});

module.exports = mongoose.model('User', userSchema);