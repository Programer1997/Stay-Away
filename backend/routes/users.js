//importuje se express i postavi se express.Router() i eksportuje
import express from 'express';
import { deleteUser, getUser, getUsers, updatePassword, updateUserInfo,updateUser } from '../controllers/userController.js';
import { verifyToken, verifyUser,verifyAdmin } from '../utils/token.js';

const router = express.Router();


//GET All users|| testing purpose dont need verifyAdmin
router.get("/testing",getUsers);
router.delete("/testing/:id",deleteUser);
router.put("/testing/:id", updateUser);

//UPDATE:(owner ili admin moze updatovati)
// router.put("/:id",verifyUser, updateUser)
//DELETE:
router.delete("/:id",verifyUser, deleteUser)
//GET ALL:
router.get("/", verifyAdmin,getUsers)
//GET SINGLE ONE:
router.get("/:id",verifyUser, getUser)

//UPDATE USER INFO:
router.put("/:id", verifyUser, updateUserInfo)

//UPDATE USER PASSWORD:
router.patch("/:id", verifyUser, updatePassword)

export default router;

//checking auth token get form, svrha je testiranje toke.js-a:
// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send("Hello user, you are logged in!")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })