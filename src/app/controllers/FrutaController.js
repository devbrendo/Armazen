const { response } = require("express");
const FrutasRepository = require('../repositories/FrutasRepository');

class FrutaController {
  async index(request, response) {
    //listagem dos registros
    const frutas = await FrutasRepository.findAll();

    response.json(frutas);
  };

  async show(request, response) {
    //obter um registro
    const { id } = request.params;
    const frutas = await FrutasRepository.findById(id);

    if (!frutas) {
      //404 not found
      return response.status(404).json({ error: 'User not found' })
    }
    response.json(frutas)
  }

  store(resquest, response) {
    //criar um registro
    response.send('Criação de um registro')
  }

  update(resquest, response) {
    //editar um registro
    response.send('Edição de registro')
  }

  async delete(request, response) {
    //deletar um registro
    const { id } = request.params;

    const frutas = await FrutasRepository.findById(id);

    if(!frutas) {
      return response.status(404).json({error: 'User not found'});
    }

    await FrutasRepository.delete(id);
    //204: No content
    response.sendStatus(204);
    
  }
}

module.exports = new FrutaController();