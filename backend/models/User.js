import mongoose from "mongoose"
const { Schema } = mongoose;

const userSchema = new Schema({  
    //Abraham wa here :  addition "firstName" & "lastName","username" will be optional and "email" will be UNIQUE
    //conflicts on data base FIXED !
    firstName: { 
        type: String,
        required: true,
    },
    lastName: { 
        type: String,
        required: true,
    },
    username: { 
        type: String,
        default : ""
    },
    email: { 
        type: String,
        required: true,
        unique:true
    },
    password: { 
        type: String,
        required: true,
    },
    isAdmin: { 
        type: Boolean,
        default: false
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
},
{timestamps: true}
);
export default mongoose.model('User', userSchema);