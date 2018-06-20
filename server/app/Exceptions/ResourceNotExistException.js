'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ResourceNotExistException extends LogicalException {
  
  /**
   * Handle this exception by itself
   */
  // handle () {}

  handle (error, { response }) {
    return response.status(403).json({
      error: 'no access to resource',
    });
  }

}

module.exports = ResourceNotExistException
