import Hotel from "../models/Hotel.js"

//kopiras samo ono unutar rute samo to
export const createHotel = async (req, res, next) =>  {
    const newHotel = new Hotel(req.body)

    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err)
    }
}

//UPDATE:

export const updateHotel = async (req, res, next) =>  {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, 
            {$set: req.body},
            {new: true}
            )
        res.status(200).json(updatedHotel)
    }catch(err){
        next(err)
    }
};
//DELETING:
export const deleteHotel = async (req, res, next) =>  {

    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel Deleted')
    }catch(err){
        next(err)
    }
}

//GET A SINGLE HOTEL:
export const getSingleHotel = async (req, res, next) => {
    try{
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).send(hotel);
    }catch(err){
    next(err)
}
}
//GET ALL HOTELS:
export const getAllHotels = async (req, res, next) =>  {
    try{
    const hotels = await Hotel.find()
    res.status(200).send(hotels);
    }catch(err){
    next(err)
}
}
