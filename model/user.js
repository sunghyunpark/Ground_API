var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  uid: String,
  nickname: { type: String, required: true, max: 20}
});

module.exports = mongoose.model('user', userSchema);
