import { Router } from 'express';
import { createHotel, updateHotel, deleteHotel, findHotel, findAllHotels } from '../controllers/hotelController';

const router = Router();

router.post('/', createHotel);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);
router.get('/:slug', findHotel);
router.get('/', findAllHotels);

export default router;
