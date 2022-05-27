const mongoose = require('mongoose');
const { Schema } = mongoose;

const treatmentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    diagnosis: { type: String },
    symtomps: { type: String },
    treatment: { type: String },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
);

module.exports = treatmentSchema;
