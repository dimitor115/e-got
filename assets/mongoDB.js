const mongo = require('mongodb')
class MongoService {
  async connect() {
    const mongoUrl = 'mongodb://dev:szpunar123@ds149914.mlab.com:49914/e-got';
    const client = (await mongo.MongoClient.connect(mongoUrl)).db("e-got")
    console.log('Mongo connected !')

    this.routes = client.collection('routes')
    this.evidences = client.collection('evidences')
    console.log('Collection imported')
  }
}
module.exports = new MongoService()



