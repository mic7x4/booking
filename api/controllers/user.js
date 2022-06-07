import User from "../models/User.js";


// UPDATE User
export const updateUser =  async (req,res,next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set: req.body}, {new:true});
        res.status(200).json(updatedUser);

    }catch(err){
        next(err)
    }
}

// DELETE User
export const deleteUser = async (req,res,next) => {
    try {
        const id =  req.params.id;
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json({User:deletedUser,
            message: "User deleted successfully"
        });

    }catch(err){
        next(err)
    }
}

// GET A SINGLE User
export const getUser = async (req,res,next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);

    }catch(err){
        next(err);
    }
}

// GET ALL UserS
export const getAllUsers =  async (req,res,next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);

    }catch(err){
        next(err);
    }
}