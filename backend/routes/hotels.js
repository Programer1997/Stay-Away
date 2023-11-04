import express from 'express';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';
import  {createHotel, updateHotel, deleteHotel, getSingleHotel, getAllHotels} from "../controllers/hotelController.js"
import { verifyAdmin } from '../utils/token.js';

const router = express.Router();


//CREATE
router.post('/',verifyAdmin,createHotel);
//UPDATE
router.put('/:id', verifyAdmin, updateHotel);
//DELETE
router.delete('/:id',verifyAdmin, deleteHotel);
//GET A SINGLE HOTEL
router.get('/:id', getSingleHotel);
//GET ALL
router.get('/', getAllHotels)

export default router;