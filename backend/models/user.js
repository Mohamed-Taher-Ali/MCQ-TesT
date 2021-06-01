const mongoose = require('mongoose'),
      schema = mongoose.Schema;

const userSchema = new schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      min: 2,
      max: 50
    },
    score: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 5,
    },
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = {
  userSchema,
  User
}