const Joi = require('joi');
const mongoose = require('mongoose');

//user schema
const RecordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    required: true
	},
	hour: {
    type: Number,
    default: 0,
    min: [0, 'Hour should be begger than 0hr'],
    max: [24, 'Hour should be less than 24hr'],

  },
  note: {
    type: String,
    default: '',
  },
});

const validateRecord = (record) => {
	const schema = {
    date: Joi.date().allow(null, '').optional().default(null),
    hour: Joi.number().required().min(0).max(24).default(0),
    note: Joi.string().optional().default('')
	};

	return Joi.validate(record, schema);
}

const Record = mongoose.model('Record', RecordSchema);

exports.Record = Record;
exports.validate = validateRecord;