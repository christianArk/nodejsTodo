import {
    getTodos, 
    createTodo, 
    deleteTodo,
    editTodo,
    getTodo,
    validate
} from "../controllers/todoController"

const todoRoutes = (app) => {
    app.route('/todo')
        .get(getTodos)
        .post(validate('createTodo'), createTodo)

    app.route('/todo/:todoid')
        .get(getTodo)
        .put(editTodo)
        .delete(deleteTodo)
}

export default todoRoutes