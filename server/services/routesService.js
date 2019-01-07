const mongo = require('../mongoDB.js')

class RoutesService {
  async getSuggestedRoutes(req, res) {
    res.send(await mongo.routes.find({}).toArray())
  }
}

module.exports = new RoutesService()
