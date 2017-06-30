const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const RoomSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    photoUrl: { type: String },
    hasGhosts: { type: Boolean, default: false },

   // the id of the user who owns the room
    owner: { type: Schema.Types.ObjectId }
  },

 {
    timestamps: true
  }
);

const RoomModel = mongoose.model('Room', RoomSchema);


module.exports = RoomModel;
