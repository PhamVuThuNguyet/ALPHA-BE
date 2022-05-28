const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    user: { type: String },
    conversation: {
      type: Schema.Types.ObjectId,
      ref: 'Conversation',
      index: true,
    },
    message: { type: String },
    type: { type: String, default: 'text', enum: ['text', 'photo', 'file'] },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
);

module.exports = messageSchema;
