import Hotel from "../models/Hotel.js";

// CREATE HOTEL
export const createHotel =  async (req,res,next) => {

    const newHotel =  new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    }catch(err){
        next(err)
    }
}

// UPDATE HOTEL
export const updateHotel =  async (req,res,next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body}, {new:true});
        res.status(200).json(updatedHotel);

    }catch(err){
        next(err)
    }
}

// DELETE HOTEL
export const deleteHotel = async (req,res,next) => {
    try {
        const id =  req.params.id;
        const deletedHotel = await Hotel.findByIdAndDelete(id);
        res.status(200).json({hotel:deletedHotel,
            message: "Hotel deleted successfully"
        });

    }catch(err){
        next(err)
    }
}

// GET A SINGLE HOTEL
export const getHotel = async (req,res,next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);

    }catch(err){
        next(err);
    }
}

// GET ALL HOTELS
export const getAllHotels =  async (req,res,next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);

    }catch(err){
        next(err);
    }
}