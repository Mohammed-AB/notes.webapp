'use strict'


const Todo = use('App/Models/Todo');
const Task = use('App/Models/Task');
const AuthorizationService = use('App/Services/AuthorizationService');

class TaskController {

    async index({ auth, request, params }) {
        const user = await auth.getUser();
        const {id} = params; 
        const todo = await Todo.find(id);
        AuthorizationService.verifyPermission(todo, user);
        return await todo.tasks().fetch();
    }
 

    async create({ auth, request, params }) {
        const user = await auth.getUser();
        const {description} = request.all();
        const {id} = params; 
        const todo = await Todo.find(id);
        AuthorizationService.verifyPermission(todo, user);
        const task = new Task();
        task.fill({
            description,
          });
        await todo.tasks().save(task);
        return task;
    }


    async destroy({ auth, request, params }) {
        const user = await auth.getUser();
        const { id } = params;
        const task = await Task.find(id);
        const todo = await task.todo().fetch();
        AuthorizationService.verifyPermission(todo, user);
        await task.delete();
        return task;
      }


      async update({ auth, request, params }) {
        const user = await auth.getUser();
        const { id } = params;
        const task = await Task.find(id);
        console.log(task)
        const todo = await task.todo().fetch();
        AuthorizationService.verifyPermission(todo, user);
        task.merge(request.only([
          'description',
          'completed',
        ]));
        await task.save();
        return task;
      }

}

module.exports = TaskController
