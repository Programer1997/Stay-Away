import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import reviewsRoute from './routes/review.js';
import cookieParser from 'cookie-parser'
import cors from 'cors';

const app = express()
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend domain
    credentials: true
}));

//Enviroment variables / variables de entorno / para proteger datas sencibles que no quieres que otros vean
dotenv.config()
const PORT = process.env.PORT || 8000;



//connect:
mongoose.connect(process.env.MONGO, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connected to MongoDb');
}).catch(err =>{
    throw err
})
//checking for connecting to mongodb:
mongoose.connection.on('disconnected', () =>{
    console.log('mongoDB disconnected!');
})
mongoose.connection.on('connected', () =>{
    console.log('mongoDB connected!');
})

//middlewares:
app.use(cookieParser())
app.use(express.json())


app.use('/api/auth', authRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/reviews', reviewsRoute)

//error handling middleware - 
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });


//testing teh routes:
app.get('/', (req,res)=>{
    res.send('First request')
})




app.listen(PORT, ()=>{
    console.log(`Backend connected on port :${PORT} `);
})