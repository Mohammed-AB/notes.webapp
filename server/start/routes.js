'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')



Route.group(() => {
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');

  Route.get('todos', 'TodoController.index').middleware('auth');
  Route.post('todos', 'TodoController.create').middleware('auth');
  Route.delete('todos/:id', 'TodoController.destroy').middleware('auth');
  Route.patch('todos/:id', 'TodoController.update').middleware('auth');
  
  Route.get('todos/:id/tasks', 'TaskController.index').middleware('auth');
  Route.post('todos/:id/tasks', 'TaskController.create').middleware('auth');
  
  Route.delete('tasks/:id', 'TaskController.destroy').middleware('auth');
  Route.patch('tasks/:id', 'TaskController.update').middleware('auth');
  
 
})
  .prefix('api');



