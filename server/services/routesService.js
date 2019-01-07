const mongoClient = require('../mongoDB.js')

class RoutesService {
  async getSuggestedRoutes(req, res) {
    const mongo = await mongoClient()
    res.send(await mongo.routes.find({}).toArray())
  }
}

module.exports = new RoutesService()
