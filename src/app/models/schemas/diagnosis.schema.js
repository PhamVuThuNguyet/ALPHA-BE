const mongoose = require('mongoose');
const { Schema } = mongoose;

const diagnosisSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', autopopulate: true },
    symtoms: { type: String },
    predicted_results: { type: Array }
}, {
    timestamps: { createdAt: 'created_at' },
});

module.exports = diagnosisSchema;