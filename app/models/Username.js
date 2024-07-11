const { Schema, model } = require('mongoose');
const postSchema = require('./Post');

// Schema to create users model
const usersSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    posts: [postSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const users = model('users', usersSchema);

module.exports = users;
