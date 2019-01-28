/**
 * This module realize logic of suggested routes data abstraction
 * @module Routes-Service
 * **/
const mongo = require('../mongoDB.js')

class RoutesService {
  /** @function getSuggestedRoutes **/
  async getSuggestedRoutes() {
    return mongo.routes.find({}).toArray()
  }
}

module.exports = new RoutesService()
