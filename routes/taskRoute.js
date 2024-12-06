const express = require('express');
const Task = require('../model/taskModel');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/tasksController');

const router = express.Router();

// Create a task
router.post('/api/tasks', createTask)

//GET/Read all task
router.get('/api/tasks', getTasks)

//GET/Read single task
router.get('/api/tasks/:id', getTask)

//Delete task
router.delete('/api/tasks/:id', deleteTask)

//Update one field task
router.patch('/api/tasks/:id', updateTask)

//Update all field task
router.put('/api/tasks/:id', updateTask)

module.exports = router