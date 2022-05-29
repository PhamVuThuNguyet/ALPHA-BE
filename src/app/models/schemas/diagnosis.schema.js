const mongoose = require('mongoose');
const { Schema } = mongoose;

const diagnosisSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', autopopulate: true},
    title: { type: String },
    symtomps: { type: String },
    description: { type: Date },
    accurancy: { type: Number },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
);

module.exports = diagnosisSchema;
