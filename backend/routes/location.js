// En tu archivo de rutas (locationRoutes.js):

import Express from 'express';
import {
    getLocations,
    createLocation,
    getSingleLocation,
    getAllLocations,
    deleteLocation,
    updateLocation
} from '../controllers/locationController.js';

const router = Express.Router();

router.get('/testing', getLocations); 
router.post('/register', createLocation); 
router.get('/', getAllLocations); 
router.delete('/:id', deleteLocation); 
router.put('/:id', updateLocation); 
router.get('/:id', getSingleLocation); 

export default router;
