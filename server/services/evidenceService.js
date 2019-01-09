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

  async changeStatus(req) {
    const _id = ObjectId(req.params.id)
    const approved = req.body.approved
    return mongo.evidences.findOneAndUpdate({_id}, {$set: {approved}})
  }

  remove(req) {
    const _id = ObjectId(req.params.id)
    return mongo.evidences.findOneAndDelete({_id})
  }

  async verificatorEvidences() {
    console.log("-> verificator evidences")
    return (await mongo.evidences
      .find({}).toArray())
      .map(y => {y.photo = null; return y}) //TODO: fix projection

  }

  turistEvidences() {
    // return mongo.evidences.find({}).toArray() //TODO: dodać punkty dla odcinka
  }
}

module.exports = new EvidenceService()

async function getTrackId(payload) {
  return await {_id: 32424}
}
