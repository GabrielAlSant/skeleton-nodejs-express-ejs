let connect = function(){
if(global.connection){
  return global.connection.connect();
}
  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString:"postgres://zhmyoxyk:zWO6MyI2KzlfmKf90QwD1UobnhXtTQGt@kesavan.db.elephantsql.com/zhmyoxyk"
  });

  global.connection = pool 
  return pool.connect();
}

module.exports = { connect }