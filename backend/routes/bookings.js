import Express from  'express';
import {
    getBookings,
    createBooking,
    getSingleBooking,
    getAllBookings,
    deleteBooking,
    updateBooking
} from '../controllers/bookingsController.js';

const router  = Express.Router();

router.get('/testing',getBookings);
router.post('/register',createBooking);
router.get('/',getAllBookings);
router.delete('/:id',deleteBooking);
router.put('/:id',updateBooking);
router.get('/:id',getSingleBooking);

export default router;