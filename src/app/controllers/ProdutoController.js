const { response } = require("express");
const ProdutosRepository = require("../repositories/ProdutosRepository");

class ProdutoController {
async index(request, response){
const produtos = await ProdutosRepository.findAll();

response.json(produtos);
}
async show(request, response){
  const { id } = request.params;
  const produtos = await ProdutosRepository.findById(id);

  if (!produtos) {
    return response.status(404).json({ error:"Produto not found"})
  };
  response.json(produtos)
}
async store(request, response){
  const {
    produto, descricao
  } = request.body;

  if(!produto){
    return response.status(400).json({error:"Nome do Produto Obrigatório"})
  };

  const ProdutosExists = await ProdutosRepository.findByProduto(produto);
  if ( ProdutosExists) {
    return response.status(400).json({error:"O produto já existe"});
  };

  const produtos = await ProdutosRepository.create({
    produto,
    descricao  
  });
  response.json(produtos);
}
async update(request, response){
  const {id} = request.params;
  const {
    produto,
    descricao
  } = request.body;

  const produtoExists = await ProdutosRepository.findById(id);

  if(!produtoExists) {
    return response.status(404).json({error: 'Fruta não existe'});
  };

  if(!produto) {
    return response.status(400).json({ error: 'Produto é Obrigatório'})
  };

  const produtoByProduto = await ProdutosRepository.findByProduto(produto);
  if( produtoByProduto && produtoByProduto.id !== id) {
    return response.status(400).json({ error: 'Produto ja cadastrado'})
  };

  const product = await ProdutosRepository.update(id,{
    produto, descricao
  });

  response.json(product);
}

async delete(request, response){
  const { id } = request.params;

  const produtos = await ProdutosRepository.findById(id);

  if(!produtos) {
    return response.status(404).json({ error: 'Produto não existe'});
  };

  await ProdutosRepository.delete(id);

  response.sendStatus(204);
}
}

module.exports = new ProdutoController