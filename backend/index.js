import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import propertyRoute from './routes/property.js'
import bookingsRoute from './routes/bookings.js';
import locationRoute from './routes/location.js';
import cookieParser from 'cookie-parser'
import http from 'http';
import {Server} from 'socket.io';
import reviewsRoute from './routes/review.js';
dotenv.config();
import multer from 'multer';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', 
        credentials: true
    }
});

//multer Files uploading
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb (null,"./public/images")
    },
    filename : function(req,file,cb){
        return cb (null,`${Date.now()}_${file.originalname}`)
    }
});
const upload = multer({storage}).array('photos');

app.post('/api/upload',(req,res)=>{
    upload(req, res, (err) => {
        //console.log(req.body);
        console.log(req.files);
        const photoUrls = req.files.map((file)=>`/public/images/${file.filename}`);
        if (err) {
          return res.json({ success: false, err });
        }
        return res.json({ success: true, files: req.files,photoUrls }); // Devuelve los archivos subidos
      });
});

// Database Connection
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    throw err;
});

//middlewares:
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected!');
});

app.use('/api/auth', authRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)

app.use('/api/property', propertyRoute)
app.use('/api/bookings', bookingsRoute)
app.use('/api/location', locationRoute)

// Routes
app.use('/api/auth', authRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/reviews', reviewsRoute);

// Socket.io Chat Logic
io.on('connection', (socket) => {
    console.log('User connected', socket.id);

    socket.on('send_message', (data) => {
        io.emit('receive_message', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
    });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});
