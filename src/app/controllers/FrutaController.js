const { response } = require("express");
const { findByNome } = require("../repositories/FrutasRepository");
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
    };
    response.json(frutas)
  }

  async store(request, response) {
    //criar um registro
    const {
      nome
    } = request.body;

    if(!nome){
      return response.status(400).json({ error: 'Nome obrigatorio '});
    };

    const FrutasExists = await FrutasRepository.findByNome(nome);

    if ( FrutasExists){
      return response.status(400).json({ error: 'A fruta ja existe '});
    };

    const frutas = await FrutasRepository.create({
      nome,
    });
    response.json(frutas);
  } 

  async update(request, response) {
    //editar um registro
    const {id} = request.params;
    const {
      nome
    } = request.body;

    const frutaExists = await FrutasRepository.findById(id);
    if (!frutaExists) {
      return response.status(404).json({error: 'Fruta não existe'});
    }

    if(!nome){
      return response.status(400).json({ error: 'Nome obrigatorio '});
    };

    const frutaByNome = await FrutasRepository.findByNome(nome);
    if( frutaByNome && frutaByNome.id !== id) {
      return response.status(400).json({error: "nome em uso"})
    }

    const fruta = await FrutasRepository.update(id, {
      nome, peso_id
    });

    response.json(fruta);
  }

  async delete(request, response) {
    //deletar um registro
    const { id } = request.params;

    const frutas = await FrutasRepository.findById(id);

    if(!frutas) {
      return response.status(404).json({error: 'User not found'});
    };

    await FrutasRepository.delete(id);
    //204: No content
    response.sendStatus(204);
    
  }
}

module.exports = new FrutaController();