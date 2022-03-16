const db = require("../db")

class Autor{
  static  async inserir(){
      const connect = await db.connect(data);
    const sql = "insert into autores(nome, sobrenome, datanascimento) values($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.datanascimento]
    return await connect.query(sql,values)
  }
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("Select * from autores")
  }
  static async atualizar(){
    const sql = "Update autores set  nome=$1 , sobrenome=$2 , datanascimento=$3 WHERE id = $4";
    const values = [data.nome, data.sobrenome, data.datanascimento, id]
    return await connect.query(sql,values)
  }
  static async deletar(){
    const sql = "Delete from autores WHERE = $1";
    const values = [data.nome, data.sobrenome, data.datanascimento]
    return await connect.query(sql,values)
  }
}


module.exports = Autor;