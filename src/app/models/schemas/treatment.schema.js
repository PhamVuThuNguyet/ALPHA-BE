const mongoose = require('mongoose');
const { Schema } = mongoose;

const treatmentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', autopopulate: true },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', autopopulate: true },
    diagnosis: { type: String },
    symtomps: { type: String },
    treatment: { type: String },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
);

module.exports = treatmentSchema;
