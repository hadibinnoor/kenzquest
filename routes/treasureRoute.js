const express = require('express')
const treasureController = require('../controllers/treasureController')
const router = express.Router()

router.get('/', treasureController.getHomePage)
router.post('/', treasureController.postHomePage)

module.exports = router;