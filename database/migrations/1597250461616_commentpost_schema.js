'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentpostSchema extends Schema {
  up () {
    this.create('commentposts', (table) => {
      table.increments()
      table.string('name', 100)
      table.string('comment', 200)
      table.timestamps()
    })
  }

  down () {
    this.drop('commentposts')
  }
}

module.exports = CommentpostSchema
