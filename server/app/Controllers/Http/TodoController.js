'use strict'


const Todo = use('App/Models/Todo');

class TodoController {
    async index({ auth }) {
        const user = await auth.getUser();
        return await user.todos().fetch();
    }

    async create({ auth, request }) {
        const user = await auth.getUser();
        const { title } = request.all();
        const todo = new Todo();
        todo.fill({
            title,
        });
        await user.todos().save(todo);
        return todo;
    }
}

module.exports = TodoController
