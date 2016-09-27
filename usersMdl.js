var mongoose = require('mongoose')

// spelers schema
var userSchema = new mongoose.Schema(
  {
    nameplayerone: { type: String, required: true },
    emailplayerone: { type: String },
    nameplayertwo: { type: String, required: true },
    emailplayertwo: { type: String }
  }, {
    collection: 'users'
  });

var User = module.exports = mongoose.model('User', userSchema);

// add user name
module.exports.addUser = function (user, callback) {
  User.create(user, callback);
};


// Get users: speler namen exporteren in module
module.exports.getUser = function (callback, limit) {
  User.find(callback).limit(limit);
};


// standaardnamen 'Player1' en 'Player2' vernieuwen na bevestigen gekozen spelernamen
module.exports.updateUser = function (id, user, options, callback) {
  var query = { _id: id };
  var update = {
    nameplayerone: user.nameplayerone,
    emailplayerone: user.emailplayertwo,
    nameplayertwo: user.nameplayertwo,
    emailplayertwo: user.emailplayertwo
  }
  User.findOneAndUpdate(query, update, options, callback);
};


module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};


// delete user names
module.exports.removeUser = function (id, callback) {
  var query = { _id: id };
  User.remove(query, callback);
};

