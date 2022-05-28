const mongoose = require('mongoose');
const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    latestMsg: { type: String, default: '' },
    user: { type: Array },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
);

module.exports = conversationSchema;
