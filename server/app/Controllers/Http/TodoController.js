'use strict'

const Todo = use('App/Models/Todo');
const AuthorizationService = use('App/Services/AuthorizationService');


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

    async destroy({ auth, request, params }) {
        const user = await auth.getUser();
        const { id } = params;
        const todo = await Todo.find(id);
        AuthorizationService.verifyPermission(todo, user);
        await todo.delete();
        return todo;
      }

      async update({ auth, request, params }) {
        const user = await auth.getUser();
        const { id } = params;
        const todo = await Todo.find(id);
        AuthorizationService.verifyPermission(todo, user);
        todo.merge(request.only('title'));
        await todo.save();
        return todo;
      }


}

module.exports = TodoController
