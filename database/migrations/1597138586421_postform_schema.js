'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostformSchema extends Schema {
  up () {
    this.create('postforms', (table) => {
      table.increments()
      table.string('namepost', 100)
      table.string('nameAddress', 200)
      table.string('country', 60)
      table.string('pic', 60)
      table.string('subject', 500)
      table.string('rating', 10)
      table.timestamps()
    })
  }

  down () {
    this.drop('postforms')
  }
}

module.exports = PostformSchema
