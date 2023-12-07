import mongoose from 'mongoose';
const {Schema} = mongoose;

const bookingSchema = new Schema ({  
    //Abraham wa here :  addition "firstName" & "lastName","username" will be optional and "email" will be UNIQUE
    //conflicts on data base FIXED !
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },
    property: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Property',
    },
    checkInDate: { 
        type: Date,
        required: true,
    },
    checkOutDate: { 
        type: Date,
        required: true,
    },
    guests:{ 
        type:Number,
        required: true,
    },
    totalPrice: {
        type:Number,
        required: true,
    }
},
{timestamps: true}
);

export default mongoose.model('Booking', bookingSchema);

