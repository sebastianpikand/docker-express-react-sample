const knex = require('../knex');
const intArray = require('./data/integers');

(async () => {
  await knex('example_table').del();
  console.log('Data deleted');
  await knex.batchInsert(
    'example_table',
    intArray.map((int) => ({ int }))
  );
  console.log('Data inserted');
})().catch((err) => {
  console.error(err);
});
