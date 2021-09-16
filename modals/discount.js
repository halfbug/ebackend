const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
  value: {
    type: String,
    },
  
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

DiscountSchema.post('save', function (doc) {
  doc.lastUpdate = Date.now();
});

module.exports = mongoose.model('Discount', DiscountSchema);