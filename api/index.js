var express = require('express');
var router = express.Router();
var task = require('./task-module');

router.get('/getTasks', task.getTasks);
router.get('/getTask/:tskId', task.getTask);
router.post('/addTask', task.addTask);
router.put('/editTask/:tskId', task.editTask);
router.put('/setTask/:tskId', task.setTask);
router.delete('/deleteTask/:tskId', task.deleteTask);

module.exports = router;