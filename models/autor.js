const db = require("../db")

class Autor{
  static inserir(){
    
  }
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("Select * from autores")
  }
  static atualizar(){
    
  }
  static deletar(){
    
  }
}


module.exports = Autor;