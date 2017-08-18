
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.integer('price');
      table.string('url');
      table.string('image');
      table.integer('userid')
          .references('uid')
          .inTable('users')
          .onDelete('cascade')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('favorites')
};
