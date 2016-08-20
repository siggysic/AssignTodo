var mysql = require('mysql'),
  strQuery = "",
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo_task"
  });

connection.connect();

function __getTasks(req, res) {
  strQuery = "SELECT * FROM task";
  connection.query(strQuery, function(err, rows){
    if(err) {
      res.send({
        gStatus: false,
        error: err
      });
    }else {
      res.send({
        gStatus: true,
        result: rows
      });
    }
  });
}

function __getTask(req, res) {
  strQuery = "SELECT * FROM task WHERE task_id=?";
  connection.query(strQuery, [req.params.tskId], function(err, rows){
    if(err) {
      res.send({
        gStatus: false,
        error: err
      });
    }else {
      res.send({
        gStatus: true,
        result: rows
      });
    }
  });
}

function __addTask(req, res) {
  strQuery = "INSERT INTO task SET ?";
  if(!req.body.task_status) {
    req.body.task_status = 'pending';
  }
  connection.query(strQuery, req.body, function(err, rows){
    if(err) {
      res.send({
        gStatus: false,
        error: err
      });
    }else {
      res.send({
        gStatus: true,
        result: "Success"
      });
    }
  });
}

function __editTask(req, res) {
  strQuery = "UPDATE task SET ? WHERE task_id=?";
  connection.query(strQuery, [req.body, req.params.tskId], function(err, rows){
    if(err) {
      res.send({
        gStatus: false,
        error: err
      });
    }else {
      res.send({
        gStatus: true,
        result: "Success"
      });
    }
  });
}

function __setTask(req, res) {
  if(req.body.task_status) {
    strQuery = "UPDATE task SET task_status=? WHERE task_id=?";
    connection.query(strQuery, [req.body.task_status, req.params.tskId], function(err, rows){
      if(err) {
        res.send({
          gStatus: false,
          error: err
        });
      }else {
        res.send({
          gStatus: true,
          result: "Success"
        });
      }
    });
  }else {
    res.send({
      gStatus: false,
      result: "Nothing happened"
    });
  }
}

function __deleteTask(req, res) {
  strQuery = "DELETE FROM task WHERE task_id=?";
  connection.query(strQuery, [req.params.tskId], function(err, rows){
    if(err) {
      res.send({
        gStatus: false,
        error: err
      });
    }else {
      res.send({
        gStatus: true,
        result: "Success"
      });
    }
  });
}

module.exports.getTasks = __getTasks;
module.exports.getTask = __getTask;
module.exports.addTask = __addTask;
module.exports.editTask = __editTask;
module.exports.setTask = __setTask;
module.exports.deleteTask = __deleteTask;