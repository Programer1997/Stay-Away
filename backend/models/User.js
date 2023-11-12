import mongoose from "mongoose"
const { Schema } = mongoose;

const userSchema = new Schema({  
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
},
{timestamps: true}
);
export default mongoose.model('User', userSchema);

//timestamps dodaju automatski dva polja:
//createdAt i updatedAt, ovdje su stavljeni na true sto znaci
//da svaki put kada se bude dodao novi user ce se updatovati profil i createdAt
//ovako ce izgledati user in database:
// {
//     "_id": "60f6dfc9a4d5f90b842ce1e9",
//     "username": "john_doe",
//     "email": "john@example.com",
//     "password": "hashed_password_here",
//     "isAdmin": false,
//     "createdAt": "2023-07-20T10:21:13.223Z",
//     "updatedAt": "2023-07-20T10:21:13.223Z"
// }