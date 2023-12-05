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

router.get('/testing', getProperties); // Cambia la referencia a getProperties
router.post('/register', createProperty); // Cambia la referencia a createProperty
router.get('/', getAllProperties); // Cambia la referencia a getAllProperties
router.delete('/:id', deleteProperty); // Cambia la referencia a deleteProperty
router.put('/:id', updateProperty); // Cambia la referencia a updateProperty
router.get('/:id', getSingleProperty); // Cambia la referencia a getSingleProperty

export default router;
