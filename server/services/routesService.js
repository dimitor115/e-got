import mongoClient from '../mongoDB.js'
class RoutesService {
  async getSuggestedRoutes() {
   const mongo = await mongoClient()
    return mongo.routes.find({}).toArray()
  }
}

export default new RoutesService()
