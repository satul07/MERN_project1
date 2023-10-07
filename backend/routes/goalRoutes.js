const express = require('express')
const router = express.Router()
const {getGoals, createGoal, updateGoal, deleteGoal} = require('../controllers/goalControllers')

// router.get('/', getGoals)
// router.post('/', createGoal)
router.route('/').get(getGoals).post(createGoal) //Chaining into single, as api path is same

// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router