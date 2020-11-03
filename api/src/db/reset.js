const knex = require('knex');
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development'];

console.log('Using knex config', knexConfig);

const run = async () => {
  console.log('Reset started');
  const knexClient = knex(knexConfig);
  await knexClient.raw(`
    DROP SCHEMA public CASCADE;
    CREATE SCHEMA public;
    GRANT ALL ON SCHEMA public TO postgres_db;
    GRANT ALL ON SCHEMA public TO public;`);
  await knexClient.destroy();
  console.log('Reset finished');
};

run()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
