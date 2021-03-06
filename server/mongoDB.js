/**
 * This module create connection to mongo db and create client
 * @module MongoService**/

const mongo = require('mongodb')
class MongoService {
  async connect() {
    const mongoUrl = 'mongodb://dev:szpunar123@ds149914.mlab.com:49914/e-got';
    const client = (await mongo.MongoClient.connect(mongoUrl)).db("e-got")
    console.log('Mongo connected !')

    this.routes = client.collection('routes')
    this.evidences = client.collection('evidences')
    this.geoPoints = client.collection('points')
    this.tracks = client.collection('tracks')
    console.log('Collection imported')
  }
}
module.exports = new MongoService()



