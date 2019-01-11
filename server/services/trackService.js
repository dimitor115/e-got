const mongo = require('../mongoDB.js')

class TracksService {

  async add(req) {
    console.log('->add Track')
    const payload = req.body
    const result = await mongo.geoPoints.insertMany(payload.geoPoints)
    return mongo.tracks.insertOne({
      points: payload.points,
      mountainGroup: payload.group,
      geoPoints: result.insertedIds
    })
  }
}

module.exports = new TracksService()
