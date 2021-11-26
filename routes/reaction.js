const { Router } = require('express')

const { reactionDelete, reactionGet, reactionPost } = require('../controllers/reaction')

const router = Router()

router.get('/:id', reactionGet)

router.post('/:id', reactionPost)

router.delete('/:id', reactionDelete)

module.exports = router