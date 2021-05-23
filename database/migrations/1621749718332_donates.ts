import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Donates extends BaseSchema {
  protected tableName = 'donates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer('value');
      table
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE')
      table
        .integer("campaign_id")
        .unsigned()
        .references("campaigns.id")
        .onDelete("CASCADE");
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
