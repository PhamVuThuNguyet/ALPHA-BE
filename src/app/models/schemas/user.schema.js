const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
  {
    account: { type: Schema.Types.ObjectId, ref: 'Account' },
    firstName: { type: String },
    lastName: { type: String },
    avatar: { type: String },
    dateOfBirth: { type: Date },
    address: { type: String },
    gender: { type: String },
    data: { type: Schema.Types.Mixed },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
)

module.exports = userSchema
