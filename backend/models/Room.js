//ovdje se prave mongoDB schema: room schema:

import mongoose from "mongoose"
const { Schema } = mongoose;

const RoomSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],

    //example:

    // {number:101, unavailableDates: []}
    // {number:102, unavailableDates: []}
    // {number:103, unavailableDates: []}
    // {number:104, unavailableDates: []}
    // {number:105, unavailableDates: []}




},
    { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);