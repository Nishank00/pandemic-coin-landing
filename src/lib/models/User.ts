import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        default: ""
    },
    verificationCode: {
        type: Number,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    agreedTerms: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    kycStatus: {
        enum: ['none', 'inreview', 'approved', 'rejected'],
        type: String,
        default:'none',
    },

},{timestamps: true});


const User = mongoose.models.user ||  mongoose.model("user", UserSchema);

export default User;