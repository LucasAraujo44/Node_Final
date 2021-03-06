const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const {canDrive} = require('../Enum/enums')
const bcrypt = require ('bcryptjs')


const PersonSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        cpf: {
            type: String,
            unique: true
        },
        birthDay: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        canDrive: {
            type: String,
            enum: {
                values: canDrive,
                message: "Value is not supported"
            }
        }
    })
    PersonSchema.pre('save', async function (next) {
        const hash = await bcrypt.hash(this.password, 10)
        this.password = hash
        next()
    }) 
    PersonSchema.virtual("id_user").get(function () {
        return this._id;
      })
      PersonSchema.set("toJSON", {
        virtuals: true,
        transform: (doc, converted) => {
          delete converted._id, delete converted.id;
        },
      })

PersonSchema.plugin(mongoosePaginate)
const Person = mongoose.model("Person", PersonSchema)


module.exports = Person