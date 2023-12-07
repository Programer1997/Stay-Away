import mongoose from "mongoose";
const { Schema } = mongoose;

const ReviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    hotel: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
        required: false // Set to false if the review can be for either a hotel or a room
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: false // Set to false if the review can be for either a hotel or a room
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Review', ReviewSchema);