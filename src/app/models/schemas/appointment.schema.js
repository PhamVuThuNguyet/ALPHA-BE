const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', autopopulate: true },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', autopopulate: true },
    title: { type: String },
    content: { type: String },
    appointmentAt: { type: Date },
    rate: { type: Number },
    feedback: { type: String },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
);

module.exports = appointmentSchema;
