const express = require('express')
const router = express.Router();
const routesService = require('./services/routesService.js')
const evidenceService = require('./services/evidenceService')

router.get('/routes', routesService.getSuggestedRoutes)


router.post('/evidences', evidenceService.addEvidence)
router.get('/evidences/tourist', catchResult(evidenceService.turistEvidences))
router.get('/evidences/verificator', catchResult(evidenceService.verificatorEvidences))
router.delete('/evidences/:id', catchResult(evidenceService.remove))
router.put('/evidences/:id', catchResult(evidenceService.changeStatus))

module.exports = router;

function catchResult(resultFunction) {
  return (req, res) => resultFunction(req, res)
    .then(data => res.status(200).send(data))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
}
