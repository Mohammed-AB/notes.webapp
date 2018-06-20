'use strict'

const Model = use('Model')

class Task extends Model {
    todo() {
        return this.belongsTo('App/Models/Todo');
    }
}

module.exports = Task
