//still need to create file for dateFormat

const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    commentText: {
      type: String,
      required: 'Your comment needs..... more comment',
      minlength: 1,
      maxlength: 300,
      trim: true,
    },
    commentAuthor: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
});

const Comments = model('Comments', commentSchema);

module.exports = Comments;