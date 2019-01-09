const express = require('express')
const router = express.Router();
const routesService = require('./services/routesService.js')
const evidenceService = require('./services/evidenceService')

router.get('/routes', routesService.getSuggestedRoutes)


router.post('/evidences', evidenceService.addEvidence)
router.get('/evidences/tourist', evidenceService.getTuristEvidences)
router.delete('/evidences/:id', evidenceService.remove)

module.exports = router;
