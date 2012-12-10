var pg = require('pg');

var conString = 'postgresql+psycopg2://postgres:password@localhost:5432/postgres';

var pgClient = exports.pgClient = new pg.Client(process.env.DATABASE_URL || conString);
pgClient.connect();
