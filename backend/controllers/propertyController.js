import Property from '../models/PropertysModel.js'; 
import multer from 'multer';

/*
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica la carpeta donde se guardarán los archivos
    cb(null, 'uploads/properties'); // Puedes ajustar la ruta según tu estructura de carpetas
  },
  filename: function (req, file, cb) {
    // Generar un nombre único para cada archivo subido
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage }).array('photos', 10); // 'photos' es el nombre del campo en el formulario

export const createProperty = async (req, res, next) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      // Si ocurre un error con multer
      return res.status(500).json(err);
    } else if (err) {
      // Si hay otro tipo de error
      return res.status(500).json(err);
    }

    // Los archivos se han subido correctamente, ahora puedes acceder a ellos en req.files

    // Obtener otros datos del formulario
    const { title, description, price, address, city } = req.body;

    // Crea una nueva propiedad con los datos del formulario y las rutas de las fotos
    const newProperty = new Property({
      title,
      description,
      price,
      address,
      city,
      photos: req.files.map((file) => file.path), // Almacenar las rutas de las fotos en el modelo
    });

    try {
      const saveProperty = await newProperty.save();
      res.status(200).json(saveProperty);
    } catch (err) {
      next(err);
    }
  });
};
*/

export const getProperties = (req, res) => {
    res.send("Fetching data from property database");
};

export const createProperty = async (req, res, next) => {
    const newProperty = new Property(req.body);

    try {
        const saveProperty = await newProperty.save();
        res.status(200).json(saveProperty);
    } catch (err) {
        next(err);
    }
};

export const updateProperty = async (req, res, next) => {
    try {
        const updatedProperty = await Property.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedProperty);
    } catch (err) {
        next(err);
    }
};

export const deleteProperty = async (req, res, next) => {
    try {
        await Property.findByIdAndDelete(req.params.id);
        res.status(200).json('Property Deleted');
    } catch (err) {
        next(err);
    }
};

export const getSingleProperty = async (req, res, next) => {
    try {
        const property = await Property.findById(req.params.id);
        res.status(200).send(property);
    } catch (err) {
        next(err);
    }
};

export const getAllProperties = async (req, res, next) => {
    try {
        const properties = await Property.find()
        .populate('user','email');
        res.status(200).json(properties);
    } catch (err) {
        next(err);
    }
};
