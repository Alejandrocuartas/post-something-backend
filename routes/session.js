const { Router } = require('express')
const { check } = require('express-validator')

const { commentPost, commentGet } = require('../controllers/session')
const validator = require('../middlewares/validator')
const { existId } = require('../helpers/dbValidator')

const router = Router()

router.get('/:id', commentGet)

router.post('/:id',[
    check('comment', 'The comment must have at least 10 characters').isLength({ min: 6 }),
    check('nick', 'The nickname must have at least 5 characters').isLength({ min: 5 }),
    check('id', 'The id must be a MongoDB id').isMongoId(),
    check('id').custom( existId ),
    validator
], commentPost)

module.exports = router
