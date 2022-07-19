const { v4 } = require('uuid')
let frutas = [
  {
    id: v4(),
    nome: 'morango',
    category_id: v4(),
  },
  {
    id: v4(),
    nome: 'manga',
    category_id: v4(),
  }
]

class FrutasRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(frutas);
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      resolve(frutas.find((frutas) => frutas.id === id))
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      resolve(frutas = frutas.filter((frutas) => frutas.id !== id));
    });
  }
}

module.exports = new FrutasRepository();