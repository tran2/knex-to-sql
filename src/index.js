var knexToSql = require('./knex-to-sql.js')


var knexCode = 'knex("Table").where({ field1, field2 })';
var output = knexToSql.toSQL(knexCode, 'pg', 20);
console.log(output);

