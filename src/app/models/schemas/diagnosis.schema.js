const mongoose = require('mongoose');
const { Schema } = mongoose;

const diagnosisSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', autopopulate: true},
    title: { type: String, required: true },
    symtomps: { type: String, required: true },
    description: { type: Date },
    accuracy: { type: Number },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
);

module.exports = diagnosisSchema;
