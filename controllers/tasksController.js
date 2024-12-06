const Task = require('../model/taskModel')

//create a task
const createTask = async (req, res)=> {
  //to save to the database
  try {
    const task = await Task.create(req.body)
    res.json(task)
  } catch (err) {
    res.status(500).json({msg: err.message})
  }
}


//get all task
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (err) {
    res.status(500).json({msg: err.message})
  }
}

//get single task
const getTask = async (req, res) => {
  try {
    const {id } = req.params
    const task = await Task.findById(id)
    if(!task){
      return res.status(404).json(`No task with id: ${id}`)
    }
    res.status(200).json(task)
  } catch (err) {
    res.status(500).json({msg: err.message})
  }
}

//Delete a task
const deleteTask = async (req, res) => {
  try {
    const {id } = req.params
    const task = await Task.findByIdAndDelete(id)
    if(!task){
      return res.status(404).json(`No task with id: ${id}`)
    }
    res.status(200).send("Task deleted successfully")
  } catch (err) {
    res.status(500).json({msg: err.message})
  }
}

// Update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findByIdAndUpdate({_id: id}, req.body, {new: true, runValidators: true} )
    if(!task){
      return res.status(404).json(`No task with id: ${id}`)
    }
    
    res.status(200).json(task)
  } catch(err) {
    res.status(500).json({msg: err.message})
  }
}


module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
}