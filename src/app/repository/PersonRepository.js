const PersonSchema = require("../schema/PersonSchema")
class PersonRepository {
    async create(payload) {
        return PersonSchema.create(payload)
    }
    async list(payload) {
        const paginateFields = {
            totalDocs: "total",
            docs: "Person",
            page: "offsets",
            nextPage: false,
            prevPage: false,
            pagingCounter: "false",
            meta: false,
            hasPrevPage: false,
            hasNextPage: false,
            limit: "limit"
        };
        const options = {
            page: 0,
            limit: 20,
            customLabels: paginateFields,
        }
        return PersonSchema.paginate(payload, options, {})
    }
    async updatePerson(id, body) {
        return PersonSchema.findByIdAndUpdate(id, body)
    }
    async getById(id) {
        return PersonSchema.findById({_id: id});
    }
    async deletePerson(payload) {
        return PersonSchema.findByIdAndDelete(payload);
      }
    async findOneEmail(email){
        return PersonSchema.findOne({email}).select('+password')
    }
}
module.exports = new PersonRepository() 