import Todo from "../models/Todo"
const { body, validationResult } = require('express-validator');

export const getTodos = async (req, res) => {
    const todos = await Todo.findAll()
    res.send(todos)
}

export const getTodo = async (req, res) => {
    const todo = await Todo.findOne({
        where: {
            id: req.params.todoid
        }
    })
    if(todo === null)
    {
        res.status(400).send({message: "Todo does not exist"})
        return
    }
    res.send(todo)
}

export const createTodo =  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const todo = await Todo.create(req.body)
    res.send(todo)
}

export const editTodo = async (req, res) => {
    let todo = await Todo.update(req.body, {
        where: {
            id: req.params.todoid
        }
    })
    todo = await Todo.findOne({
        where: {
            id: req.params.todoid
        }
    })
    res.send(todo)
}

export const deleteTodo = async (req, res) => {
    await Todo.destroy({
        where: {
            id: req.params.todoid
        }
    })
    res.send({message: "Todo has been successfully deleted"})
}

export const validate = (method) => {
    switch (method) {
        case 'createTodo':
            return [
                body('title', "The title field is required").not().isEmpty(),
                body('status', "The status must be either true or false").isIn([true, false])
            ]
        default:
            break;
    }
}