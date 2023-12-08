import { getUsers, getUser, createUser, deleteUser, updateUser } from '../controller/user.js'
import express from 'express'
const router = express.Router()

/* READ */
router.get('/', getUsers)
router.get('/:email', getUser)
/* CREATE */
router.post('/', createUser)
/* UPDATE */
router.put('/:email', updateUser)
// Delete
router.delete('/:email', deleteUser)

export default router
