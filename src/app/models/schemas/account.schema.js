const mongoose = require('mongoose')
const { Schema } = mongoose

const accountSchema = new Schema(
  {
    email: { type: String, unique: true },
    password: { type: String },
    provider: { type: String, default: 'local' },
    role: { type: String, default: 'user' },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
)

module.exports = accountSchema
