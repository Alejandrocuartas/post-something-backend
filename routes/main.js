const { Router } = require('express')
const { check } = require('express-validator')

const { getCtrl, postCtrl } = require('../controllers/main')
const validator = require('../middlewares/validator')
const { existNickname } = require('../helpers/dbValidator')

const router = Router()

router.get('/', getCtrl)
router.post('/',[
    check('nickname', 'The nickname must have at least 5 characters').isLength({ min: 5 }),
    check('nickname').custom( existNickname ),
    check('content', 'The content must have at least 10 characters').isLength({ min: 10 }),
    validator
], postCtrl)

module.exports = router