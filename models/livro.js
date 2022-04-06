const db = require("../db")

class Livro{
  static  async inserirlivro(data){
      const connect = await db.connect();
    const sql = "insert into livros(autor, titulo, editora, datapublicacao, preco) values($1, $2, $3, $4, $5)";
    const values = [data.titulo, data.editora, data.datapublicacao, data.preco, data.autor]
    return await connect.query(sql,values)
  }
  static async selecionarlivro(){
    const connect = await db.connect();
    return await connect.query("Select * from livros")
  }
  static async atualizarlivro(data){
    const connect = await db.connect();
    const sql = "Update livros set autor = $1 , titulo = $2 , editora = $3, datapublicacao = $4, preco = 5$ WHERE id = $4";
    const values = [data.nome, data.sobrenome, data.datanascimento, data.id]
    return await connect.query(sql,values)
  }
  static async deletarlivro(data){
    const connect = await db.connect();
    const sql = "Delete from livros WHERE id = $1";
    const values = [data.id]
    return await connect.query(sql,values)
  }

  static async autor(data){
 const connect = await db.connect();
    const sql = "select * from livros WHERE autor = $1";
    const values = [data.id]
    return await connect.query(sql,values)
  }
}
 

module.exports = Livro;