var $ = require('jquery');
var knexToSql = require('./knex-to-sql.js');
var wiredElements = require('wired-elements');

var submitButton = $('#submitKnexCode');
var knexCode = $('#knexCode');
var sql = $('#sql');
var errorText = $('#errorText');
errorText.hide();

knexCode.val('knex("Table").where({ field1, field2 })');

submitButton.click(function() {
  errorText.hide();
  var code = knexCode.val();
  var output = '';
  try {
    output = knexToSql.toSQL(code, 'pg', 20);
  }
  catch (error) {
    errorText.show();
    console.error(error);
    errorText.text(error.message);
  }
  sql.val(output);
});

// var knexCode = 'knex("Table").where({ field1, field2 })';
// var output = knexToSql.toSQL(knexCode, 'pg', 20);
// console.log(output);

