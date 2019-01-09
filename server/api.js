const express = require('express')
const router = express.Router();
const routesService = require('./services/routesService.js')
const evidenceService = require('./services/documentationService')

router.get('/routes', routesService.getSuggestedRoutes)

router.post('/evidence', evidenceService.addEvidence)

module.exports = router;
