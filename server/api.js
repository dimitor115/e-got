const express = require('express')
const router = express.Router();
const routesService = require('./services/routesService.js')
const evidenceService = require('./services/evidenceService')
const tracksService = require('./services/trackService')

router.get('/routes', catchResult(routesService.getSuggestedRoutes))

router.post('/tracks', catchResult(tracksService.add))

router.post('/evidences', evidenceService.addEvidence)
router.get('/evidences/tourist', catchResult(evidenceService.turistEvidences))
router.get('/evidences/verificator', catchResult(evidenceService.verificatorEvidences))
router.get('/evidences/:id', catchResult(evidenceService.getOne))
router.delete('/evidences/:id', catchResult(evidenceService.remove))
router.put('/evidences/:id', catchResult(evidenceService.changeStatus))

module.exports = router;

function catchResult(resultFunction) {
  return (req, res) => {
    const result = resultFunction(req, res)
    if (result) {
      result.then(data => res.status(200).send(data))
        .catch(err => {
          console.log(err);
          res.status(500).send(err);
        })
    }
  }
}
