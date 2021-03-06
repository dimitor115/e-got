/**
 * This module create REST API for backend application
 * @module REST-API
  **/
const express = require('express')
const router = express.Router();
const routesService = require('./services/routesService.js')
const evidenceService = require('./services/evidenceService')
const tracksService = require('./services/trackService')

/** @function GET: /api/routes **/
router.get('/routes', catchResult(routesService.getSuggestedRoutes))

/** @function POST: /api/tracks **/
router.post('/tracks', catchResult(tracksService.add))

/** @function POST: /api/evidences **/
router.post('/evidences', evidenceService.addEvidence)
/** @function GET: /api/evidences/tourist **/
router.get('/evidences/tourist', catchResult(evidenceService.turistEvidences))
/** @function GET: /api/evidences/verificator **/
router.get('/evidences/verificator', catchResult(evidenceService.verificatorEvidences))
/**@functoin  GET: /api/evidences/:id **/
router.get('/evidences/:id', catchResult(evidenceService.getOne))
/**@function DELETE: /api/evidences/:id **/
router.delete('/evidences/:id', catchResult(evidenceService.remove))
/** @function PUT: /api/evidences/:id **/
router.put('/evidences/:id', catchResult(evidenceService.changeStatus))

module.exports = router;

/**This function catch result of every service method as Promise and map it to HTTP Request
 * @function catchResult**/
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
