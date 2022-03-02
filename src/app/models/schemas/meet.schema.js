const mongoose = require('mongoose')
const { Schema } = mongoose

const meetSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    title: { type: String },
    content: { type: String },
    appointmentAt: { type: Date },
    rate: { type: Number },
    feedback: { type: String },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
)

module.exports = meetSchema
