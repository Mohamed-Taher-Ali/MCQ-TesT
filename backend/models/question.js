const mongoose = require('mongoose'),
  schema = mongoose.Schema;

const questionSchema = new schema(
  {

    question: {
      type: String,
      unique: true,
      required: true,
      min: 100,
      max: 20000
    },

    answers: [{
      answer: {
        type: String,
        unique: true,
        required: true,
        min: 1,
        max: 20000
      },

      correct: Boolean,
    }],
  },
  {
    timestamps: true
  }
);

const Question = mongoose.model('question', questionSchema);

module.exports = {
  questionSchema,
  Question
}