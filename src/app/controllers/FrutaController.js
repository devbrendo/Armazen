const { response } = require("express");

class FrutaController {
  index(request, response){
    //listagem dos registros
    response.send('Lista de registros');
  }
  show(request, response){
    //obter um registro
    response.send('Retorno de um registro')
  }
  store(resquest, response){
    //criar um registro
    response.send('Criação de um registro')
  }
  update(resquest, response){
    //editar um registro
    response.send('Edição de registro')
  }
  delete(request, response){
    //deletar um registro
    response.send('Exclusão de registro')
  }
}

module.exports = new FrutaController();