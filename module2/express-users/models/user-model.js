const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName:{String},
  username:{type:String},

  // SIGN UP/LOGIN FORM users
  encryptedPassword:{type:String},

  // GOOGLE users
  googleId:{type:String},

  // FACEBOOK users
  facebookId:{type:String}
},
{
  timestamps:true
}
);

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
