const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema(
  {
    account: { type: Schema.Types.ObjectId, ref: 'Account', index: true },
    firstName: { type: String, index: true },
    lastName: { type: String, index: true },
    avatar: { type: String },
    dateOfBirth: { type: Date },
    degree: { type: String },
    workplace: { type: Schema.Types.Mixed },
    experience: { type: String },
    awards: { type: Array },
    description: { type: String },
    major: { type: Schema.Types.ObjectId, ref: 'Major', autopopulate: true },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
);

module.exports = accountSchema;
