var $ = require('jquery');
var knexToSql = require('./knex-to-sql.js');

var submitButton = $('#submitKnexCode');
var knexCode = $('#knexCode');
var sql = $('#sql');

knexCode.val('knex("Table").where({ field1, field2 })');

submitButton.click(function() {
  var code = knexCode.val();
  var output = knexToSql.toSQL(code, 'pg', 20);
  sql.val(output);
});

// var knexCode = 'knex("Table").where({ field1, field2 })';
// var output = knexToSql.toSQL(knexCode, 'pg', 20);
// console.log(output);

