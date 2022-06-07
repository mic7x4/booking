import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'


const router = express.Router()

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//     res.send('Hello you are loggged in ')
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('Hello User, You are loggged in and you can delete your account ')
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send('Hello Admin, are loggged in and you can delete all accounts ')
// })

router.put('/:id',verifyUser,updateUser)


router.delete('/:id',verifyUser,deleteUser)

router.get('/:id',verifyUser,getUser)


router.get('/',verifyAdmin, getAllUsers)

export default router