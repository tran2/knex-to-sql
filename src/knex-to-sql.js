var sqlFormatter = require('sql-formatter');
var knex = require('knex')({
    client: 'pg'
});
window.knex = knex;
function knexToSql(knexCode, type, maxUndefined) {
  var knexQuery = knexCode;
  var output = '';
  var i = 0;
  try {
    output = eval(knexQuery).toString();
  }
  catch (error) {
    var undefinedVariable = getUndefinedVariable(error.message);
    if (!undefinedVariable) {
      throw error;
    }
    do {
      try {
        knexQuery = 'var ' + undefinedVariable + ' = "?"; ' + knexQuery; 
        output = eval(knexQuery).toString();
        undefinedVariable = null;
      } catch (err) {
        undefinedVariable = getUndefinedVariable(err.message);
      }
      i++;
    }
    while(i < maxUndefined && undefinedVariable)
  }
  return output;
}

function getUndefinedVariable(message) {
  var result = /(\S+) is not defined/g.exec(message)
  if (result && result.length > 0) {
    return result[1];
  }

  return result;
}

function formatSQL(sql) {
  return sqlFormatter.format(sql);
}

module.exports = {
  toSQL: knexToSql,
  formatSQL: formatSQL
};
