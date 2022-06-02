const CarRepository = require('../repository/CarRepository')
const Car = require('../schema/CarSchema')
class CarService {
   async create(payload) {
        const result = await CarRepository.create(payload)
        return result
    }
    async list(payload) {
        const result = await CarRepository.list(payload)
        return result
    }
    async updateCar(id, body) {
        const result = await CarRepository.updateCar(id, body);
        return result;
      }
    
}

module.exports = new CarService()