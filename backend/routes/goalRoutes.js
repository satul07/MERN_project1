const express = require('express')
const router = express.Router()
const {getGoals, createGoal, updateGoal, deleteGoal} = require('../controllers/goalControllers')
const {protect} = require('../middleware/authMiddleware')

// router.get('/', getGoals)
// router.post('/', createGoal)
router.route('/').get(protect, getGoals).post(protect, createGoal) //Chaining into single, as api path is same

// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router