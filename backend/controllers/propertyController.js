import Property from '../models/PropertysModel.js'; 


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
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (err) {
        next(err);
    }
};
