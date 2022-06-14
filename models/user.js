const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    action: {
        type: String,
        required: [true, 'User text field is required'],
    },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;