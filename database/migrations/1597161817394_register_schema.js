'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegisterSchema extends Schema {
  up () {
    this.create('registers', (table) => {
      table.increments()
      table.string('usernames', 100)
      table.integer('Passwords',30)
      table.integer('confirmPassword',30)
      table.timestamps()
    })
  }

  down () {
    this.drop('registers')
  }
}

module.exports = RegisterSchema
