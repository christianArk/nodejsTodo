import {
    getTodos, 
    createTodo, 
    deleteTodo,
    editTodo,
    getTodo,
    validate
} from "../controllers/todoController.js"

const todoRoutes = (app) => {
    app.route('/todo')
        .get(getTodos)
        .post(validate('createTodo'), createTodo)

    app.route('/todo/:todoid')
        .get(getTodo)
        .put(validate('editTodo'), editTodo)
        .delete(deleteTodo)
}

export default todoRoutes