const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
// @desc    GET goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.find()
    res.status(200).json(goal)
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
    // else 
    //     console.log(req.body)
    const goal = await Goal.create({
        text : req.body.Text,
    })
    res.status(200).json(goal) 
}) 

// @desc    PUT/Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal)
    {
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new : true,})
    res.status(200).json(updatedGoal)
    // res.status(200).json({'message' : `Update goal ${req.params.id}`})
}) 

// @desc    DELETE goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal)
    {
        res.status(400)
        throw new Error('Goal not found')
    }
    // await Goal.findByIdAndDelete(req.params.id)
    await goal.remove()
    res.status(200).json({id : req.params.id})
    // res.status(200).json({'message' : `Delete goal ${req.params.id}`})
}) 

module.exports = {getGoals, createGoal, updateGoal, deleteGoal}

