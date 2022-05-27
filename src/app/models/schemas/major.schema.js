const mongoose = require('mongoose');
const { Schema } = mongoose;

const majorSchema = new Schema(
  {
    title: { type: String, required: true },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
);

module.exports = majorSchema;
