'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LoginSchema extends Schema {
  up () {
    this.create('logins', (table) => {
      table.increments()
      table.string('username', 100)
      table.integer('password',30)
      table.timestamps()
    })
  }

  down () {
    this.drop('logins')
  }
}

module.exports = LoginSchema
