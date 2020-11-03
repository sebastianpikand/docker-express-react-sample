exports.up = (knex) => {
  return knex.schema.createTable('example_table', (table) => {
    table.increments('id').primary();
    table.integer('int');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('example_table');
};
