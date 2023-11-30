import User from "../models/User.js";
import bcrypt from "bcrypt";

 export const updateUser = async (req, res, next) => {
  try {
     const updatedUser = await User.findByIdAndUpdate(
       req.params.id,
       { $set: req.body },
       { new: true }
     );
     res.status(200).json(updatedUser);
  } catch (err) {
     next(err);
 }
 }
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}
export const updateUserInfo = async (req, res, next) => {
  try {
    const { params, body } = req
    const { firstName, lastName } = body
    const { id } = params

    const filter = { _id: id };
    const update = { firstName: firstName, lastName: lastName };

    let newUser = await User.findOneAndUpdate(filter, update, { new: true });

    res.status(200).json(newUser);
    // return newUser

  } catch (err) {
    next(err)
  }
}
export const updatePassword = async (req, res, next) => {
  try {
    const { params, body } = req
    const { password } = body
    const { id } = params

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);


    const filter = { _id: id };
    const update = { password: hashedPassword};

    let newUser = await User.findOneAndUpdate(filter, update, { new: true });

    res.status(200).json(newUser);

  } catch (err) {
    next(err)
  }
}