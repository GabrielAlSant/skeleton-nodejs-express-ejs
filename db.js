 let connect = function(){
if(global.connection){
  return global.connection.connect();
}
  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString:"postgres://iduutfjv:luCIRBGPCFYD8ZK7Lgy9CBjxz11uY6V9@tuffi.db.elephantsql.com/iduutfjv"
  });

  global.connection = pool 
  return pool.connect();
}

module.exports = { connect }