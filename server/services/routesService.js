const mongo = require('../mongoDB.js')

class RoutesService {
  async getSuggestedRoutes(req, res) {
    return mongo.routes.find({}).toArray()
  }
}

module.exports = new RoutesService()
