import { getNfts, deleteNft, getNft, createNft } from '../controller/nft.js'
import express from 'express'

const router = express.Router()

/* READ */

router.get('/', getNfts)
router.get('/:user_id', getNft)
/* CREATE */
router.post('/', createNft)

/* DELETE */
router.delete('/:user_id', deleteNft)

export default router
