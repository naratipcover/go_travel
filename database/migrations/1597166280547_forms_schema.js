'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FormsSchema extends Schema {
  up () {
    this.create('forms', (table) => {
      table.increments()
      table.string('namepost', 100)
      table.string('country', 60)
      table.string('pic', 60)
      table.string('subject', 500)
      table.string('start', 10)
      table.timestamps()
    })
  }

  down () {
    this.drop('forms')
  }
}

module.exports = FormsSchema
