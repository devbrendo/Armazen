const {response} = require('express')

class IndexController {
  inicio(request, response){
    response.send('seleção')
  }
}
module.exports = new IndexController();
