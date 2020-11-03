module.exports = {
  local: {
    client: 'pg',
    debug: true,
    connection: {
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DB_USE_SSL == 'true',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
  },
  development: {
    client: 'pg',
    debug: false,
    connection: {
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DB_USE_SSL == 'true',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
  },
  production: {
    client: 'pg',
    debug: false,
    connection: {
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DB_USE_SSL == 'true',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
  },
};
