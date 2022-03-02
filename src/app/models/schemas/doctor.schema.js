const mongoose = require('mongoose')
const { Schema } = mongoose

const accountSchema = new Schema(
  {
    account: { type: Schema.Types.ObjectId, ref: 'Account' },
    firstName: { type: String },
    lastName: { type: String },
    avatar: { type: String },
    dateOfBirth: { type: Date },
    degree: { type: String },
    workplace: { type: Schema.Types.Mixed },
    experience: { type: String },
    awards: { type: Array },
    description: { type: String },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
)

module.exports = accountSchema
