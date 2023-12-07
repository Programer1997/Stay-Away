import Express from 'express';
import {
    getProperties,
    createProperty,
    getSingleProperty,
    getAllProperties,
    deleteProperty,
    updateProperty
} from '../controllers/propertyController.js'; // Actualiza las importaciones

const router = Express.Router();

router.get('/testing', getProperties); //getProperties
router.post('/register', createProperty); //createProperty
router.get('/', getAllProperties); //getAllProperties
router.delete('/:id', deleteProperty); // deleteProperty
router.put('/:id', updateProperty); // updateProperty
router.get('/:id', getSingleProperty); // getSingleProperty

export default router;
