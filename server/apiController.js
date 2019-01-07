const express = require('express')
const router = express.Router();
const routesService = require('./services/routesService.js')
router.get('/', (req, res)=> {
  res.send("Chuje muje dzikie wensze")
})

router.get('/routes', routesService.getSuggestedRoutes)

module.exports = router;
