const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  book:{type:mongoose.Schema.Types.ObjectId, required:true, ref:'Books'},
  book:{type:mongoose.Schema.Types.ObjectId, required:true, ref:'Book'},
  user: {type:mongoose.Schema.Types.ObjectId, required:true},
  Books: {type:mongoose.Schema.Types.ObjectId, required:true},
  checkIn: {type:Date, required:true},
  checkOut: {type:Date, required:true},
  name: {type:String, required:true},
  email: {type:String, required:true},
  price: Number,
  Books: Number,
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;