
exports.up = function(knex, Promise) {
  return knex.schema.createTable("events", function(table){
    table.increments('id');
    table.string('imageurl').notNullable().defaultTo('');
    table.string('name').notNullable().defaultTo('');
    table.string('occupation').notNullable().defaultTo('')
    table.string('title').notNullable().defaultTo('');
    table.text('description').notNullable().defaultTo('');
    table.string('address').notNullable().defaultTo('');
    table.dateTime('datetime').notNullable();
    table.string('genre').notNullable();
    table.integer('ownerUserId').notNullable();
    table.foreign('ownerUserId').references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('events')]);
};
