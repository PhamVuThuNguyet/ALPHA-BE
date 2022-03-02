const mongoose = require('mongoose')
const { Schema } = mongoose

const imageSchema = new Schema(
  {
    url: { type: String },
    type: { type: String },
    typeId: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
)

module.exports = imageSchema
