const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName:{String},
  username:{type:String},
  encryptedPassword:{type:String}
},
{
  timestamps:true
}
);

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
