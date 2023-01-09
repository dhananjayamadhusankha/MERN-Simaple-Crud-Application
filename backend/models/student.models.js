const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    stdName: {
        type: 'string',
        trim: true,
        required: true
    },

    age: {
        type: 'number',
        trim: true,
        required: true
    },

    address: {
        type: 'string',
        trim: true,
        required: true
    }
});

const student = mongoose.model('Student', studentSchema);
module.exports = student;