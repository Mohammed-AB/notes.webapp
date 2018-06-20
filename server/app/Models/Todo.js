'use strict'

const Model = use('Model')

class Todo extends Model {
    user() {
        return this.belongsT('App/Models/User');
    }
}

module.exports = Todo
