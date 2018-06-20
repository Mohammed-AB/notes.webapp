'use strict'

const Model = use('Model')

class Todo extends Model {
    user() {
        return this.belongsT('App/Models/User');
    }

    tasks () {
        return this.hasMany('App/Models/Task')
      }
}

module.exports = Todo
