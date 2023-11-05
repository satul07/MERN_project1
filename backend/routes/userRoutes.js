const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getMe} = require('../controllers/userController')
const { route } = require('./goalRoutes')

const {protect} = require('../middleware/authMiddleware')

router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/me').get(protect, getMe)
// router.get('/me', protect, getMe)

module.exports = router