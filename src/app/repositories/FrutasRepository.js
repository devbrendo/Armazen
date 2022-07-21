const { v4 } = require('uuid')
let frutas = [
  {
    id: v4(),
    nome: 'morango',

  },
  {
    id: v4(),
    nome: 'manga',

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

  findByNome(nome) {
    return new Promise((resolve, reject) => {
      resolve(frutas.find((frutas) => frutas.nome === nome))
    });
  }

  create({
    nome
  }) {
    return new Promise((resolve) => {
      const newFruta = {
        id: v4(),
        nome,
      };
      frutas.push(newFruta);
      resolve(newFruta);
    });
  }

  update(id, {
    nome
  }) {
    return new Promise((resolve) => {
      const updatedFruta = {
        id,
        nome,

      };
      frutas = frutas.map((frutas) => (
        frutas.id === id ? updatedFruta : frutas
      ));

      resolve(updatedFruta);
    });
  }
}

module.exports = new FrutasRepository();