const AuthenticateService = require('../service/AuthenticateService')

class AuthenticateController {
    async create(req, res) {
        try {
            const {email,password} = req.body
            const result = await AuthenticateService.create(email, password)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(401).json(error.message)
        }
    }
}
module.exports = new AuthenticateController()