const mongo = require('../../assets/mongoDB.js')

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
    if(result.insertedCount === 1) {
      res.status(201).send()
    } else {
      res.status(409).send()
    }
  }
}

module.exports = new EvidenceService()

async function getTrackId(payload) {
  return await {_id:32424}
}
