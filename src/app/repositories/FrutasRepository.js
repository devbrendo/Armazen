const { v4 } = require('uuid')
let frutas = [
  {
    id: v4(),
    nome: 'morango',
    peso_id: "5",
  },
  {
    id: v4(),
    nome: 'manga',
    peso_id: "5",
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
    nome, peso_id
  }) {
    return new Promise((resolve) => {
      const newFruta = {
        id: v4(),
        nome,
        peso_id:v4(),
      };
      frutas.push(newFruta);
      resolve(newFruta);
    });
  }

  update(id, {
    nome, peso_id
  }) {
    return new Promise((resolve) => {
      const updatedFruta = {
        id,
        nome,
        peso_id,
      };
      frutas = frutas.map((frutas) => (
        frutas.id === id ? updatedFruta : frutas
      ));

      resolve(updatedFruta);
    });
  }
}

module.exports = new FrutasRepository();