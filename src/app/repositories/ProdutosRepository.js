const { v4 } = require("uuid");
let produtos = [
  {
    id: v4(),
    descricao: "polpa de manga madura de 100g",
    produto: "manga 100g"
  },
{
  id: v4(),
  descricao: "polpa de morango de 1kg",
  produto:"morango 1kg"
}
]

class ProdutosRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(produtos);
    });
  }
  findById(id){
    return new Promise((resolve,reject) => {
      resolve(produtos.find((produtos) => produtos.id === id))
    });
  }

  findByProduto(produto){
    return new Promise((resolve,reject) => {
      resolve(produtos.find((produtos) => produtos.produto === produto))
    });
  }

  create({ 
    produto,descricao
  }){
    return new Promise((resolve) => {
      const newProdutos = {
        id: v4(),
        produto,
        descricao
      };
      produtos.push(newProdutos);
      resolve(newProdutos);
    });
  }

  update(id, {
    produto, descricao
  }) {
    return new Promise((resolve) => {
      const updateProduto= {
        id,
        produto,
        descricao
      };
      produtos = produtos.map((produtos) => (
        produtos.id === id ? updateProduto : produtos
      ));

      resolve(updateProduto);
    })
  }

  delete(id){
    return new Promise((resolve) => {
      resolve(produtos = produtos.filter((produtos) =>produtos.id !== id));
    });
  }
}
module.exports = new ProdutosRepository();