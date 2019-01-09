const express = require('express')
const router = express.Router();
const routesService = require('./services/routesService.js')
const documentationService = require('./services/documentationService')

router.get('/routes', routesService.getSuggestedRoutes)

router.post('/documentation', documentationService.addNewDocumentation)

module.exports = router;
