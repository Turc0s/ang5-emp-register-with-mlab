var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("mongodb://turc0ss:mlab123@ds229438.mlab.com:29438/mean-todos-ang5", ["mean-todo-ang5"]);

// Get all todos
router.get("/todos", (req, res, next) => {
    db.todos.find((err, todos) => {
        if(err) { 
            res.send(err);
        } else {
            res.json(todos);
        }
    });
});

// Get a single todo
router.get("/todo/:id", (req, res, next) => {
    db.todos.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, (err, todos) => {
        if(err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
});

// Save Todo
router.post("/todo", (req, res, next) => {
    var todo = req.body;
    if(!todo.text || !(todo.isCompleted + "")) {
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });
    } else {
        db.todos.save(todos, (err, todos) => {
            if(err) {
                res.send(err);
            } else {
                res.json(todos);
            }
        });
    }
});

// Update Todo
router.put("/todo/:id", (req, res, next) => {
    var todo = req.body;
    var updTodo = {};

    if(todo.isCompleted) {
        updTodo.isCompleted = todo.isCompleted;
    }

    if(todo.text) {
        updTodo.text = todo.text;
    }

    if(!updTodo) {
        res.status(400) 
        res.json({
            "error" : "Bad Data"
        })
    } else {
        db.todos.update({_id: mongojs.ObjectId(req.params)}, {}, (err, todos) => {
            if(err) {
                res.send(err);
            } else {
                res.json(todos);
            }
        });
    }
});

// Delete Todo
router.delete("/todos/:id", (req, res, next) => {
    db.todos.remove({_id: mongojs.ObjectId(req.params.id)}, (err, todos) => {
        if(err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
});

module.exports = router;
