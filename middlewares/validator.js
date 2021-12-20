const { validationResult } = require('express-validator')
//validates the errors that the middleware 'check()' reports
const validator = (req, res, next) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }

    next()

}

module.exports = validator