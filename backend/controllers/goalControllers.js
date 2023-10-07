const asyncHandler = require('express-async-handler')

// @desc    GET goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({'message' : 'Get goals'})
}) 

// @desc    POST goals
// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(async (req, res) => {
    if(req.body.Text == null)
    {
        // res.status(400).json({'Message' : 'Please add a text field'})
        res.status(400)
        throw new Error('Please add a text field')
    }   
    else 
        console.log(req.body)
    res.status(200).json({'message' : 'Set goals'})
}) 

// @desc    PUT/Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({'message' : `Update goal ${req.params.id}`})
}) 

// @desc    DELETE goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({'message' : `Delete goal ${req.params.id}`})
}) 

module.exports = {getGoals, createGoal, updateGoal, deleteGoal}

