const express = require('express')
const router = express.Router()

const { createUser, getUser, getAllUsers, updateUser, deleteUser } = require('../controller/users')

router.post('/createUser', createUser)

router.get('/getUsers', getAllUsers)

router.get('/getUser/:id', getUser)

router.put('/updateUser/:id', updateUser)

router.delete('/deleteUser/:id', deleteUser)



module.exports = router