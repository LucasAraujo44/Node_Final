const CarRepository = require('../repository/CarRepository')
const IdNotFound = require('../Erros/IdNotFound')
const badRequest = require('../Erros/badRequest')
class CarService {
  async create(payload) {
    const result = await CarRepository.create(payload)
    if(!result){
      throw new badRequest(payload)
    }
    return result
  }
  async list(payload) {
    const result = await CarRepository.list(payload)
    return result
  }
  async updateCar(id, body) {
    const result = await CarRepository.updateCar(id, body);
    if (!result) {
      throw new IdNotFound(id)
    }
    return result;
  }
  async getById(id) {
    const result = await CarRepository.getById(id);
    if (!result) {
      throw new IdNotFound(id)
    }
    return result
  }
  async deleteCar(id) {
    const result = await CarRepository.deleteCar(id);
    if (!result) {
      throw new IdNotFound(id)
    }
    return result
  }
}

module.exports = new CarService()