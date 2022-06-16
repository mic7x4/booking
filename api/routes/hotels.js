import express from 'express'
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'



const router = express.Router()



// CREATE
router.post('/', verifyAdmin, createHotel)


// UPDATE
router.put('/:id', verifyAdmin,updateHotel)


// DELETE
router.delete('/:id',verifyAdmin, deleteHotel)


// GET
router.get('/find/:id', getHotel)

// GET ALL
router.get('/',getAllHotels)

//GET ALL HOTELS BY CITY
router.get('/countByCity',countByCity)

//GET ALL HOTELS BY TYPE
router.get('/countByType',countByType)

export default router