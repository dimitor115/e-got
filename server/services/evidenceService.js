const mongo = require('../../assets/mongoDB.js')
const ObjectId = require('mongodb').ObjectID

class EvidenceService {
  async addEvidence(req, res) {
    const payload = req.body
    const trackId = await getTrackId(payload)
    const evidence = {
      track: trackId,
      author: "build_in_turist",
      photo: payload.sectionPhoto,
      approved: false,
      additionDate: Date()
    }
    const result = await mongo.evidences.insertOne(evidence)
    if (result.insertedCount === 1) {
      res.status(201).send()
    } else {
      res.status(409).send()
    }
  }

  async remove(req, res) {
    const _id = ObjectId(req.params.id)
    mongo.evidences.findOneAndDelete({_id})
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err))
  }

  async getTuristEvidences(req, res) {
    res.send( await mongo.evidences.find({}).toArray())
  }
}

module.exports = new EvidenceService()

async function getTrackId(payload) {
  return await {_id: 32424}
}
