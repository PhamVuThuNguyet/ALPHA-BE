const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User', autopopulate: true },
    schedule: { type: Date },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
);

module.exports = notificationSchema;
