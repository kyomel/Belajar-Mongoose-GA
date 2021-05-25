const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validator(value) {
            if(validator.isEmail(value)) {
                throw new Error('Email is invalid!');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validator(value) {
            if(value.toLowerCase().include('password')) {
                throw new Error('Password cannot contain word "password"!');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validator(value) {
            if(value < 0) {
                throw new Error('Age must be number!')
            }
        }
    }
})

module.exports = User;