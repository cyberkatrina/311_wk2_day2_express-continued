const express = require('express')
const router = express.Router()
const controller = require('../controllers/contacts')

router.get('/contacts', controller.list)

router.get('/contacts/:id', controller.show)

router.post('/contacts', controller.create)

module.exports = router