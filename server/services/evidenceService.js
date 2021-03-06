/**
 * This module realize logic connected with evidence data abstraction
 * @module Evidence-Service**/
const mongo = require('../mongoDB.js')
const ObjectId = require('mongodb').ObjectID

class EvidenceService {
  /**@function addEvidence**/
  async addEvidence(req, res) {
    console.log("-> new evidence")
    const payload = req.body
    const trackId = await getTrackId(payload)
    const evidence = {
      track: trackId,
      author: "build_in_turist",
      photo: payload.photo,
      startPoint: payload.startPoint,
      endPoint: payload.endPoint,
      approved: null,
      trackDate: payload.trackDate,
      additionDate: Date()
    }
    const result = await mongo.evidences.insertOne(evidence)
    if (result.insertedCount === 1) {
      res.status(201).send()
    } else {
      res.status(409).send()
    }
  }

  /**@function changeStatus**/
  async changeStatus(req) {
    console.log("-> evidence status change")
    const _id = ObjectId(req.params.id)
    const approved = req.body.approved
    return mongo.evidences.findOneAndUpdate({_id}, {$set: {approved}})
  }

  /**@function remove**/
  remove(req) {
    console.log("-> remove evidence")
    const _id = ObjectId(req.params.id)
    return mongo.evidences.findOneAndDelete({_id})
  }

  /**@function verificatorEvidences**/
  async verificatorEvidences() {
    console.log("-> verificator evidences")
    return (await mongo.evidences
      .find({approved: null}).toArray())
      .map(y => {
        y.photo = null;
        return y
      }) //TODO: fix projection

  }

  /**@function turistEvidences**/
  turistEvidences() {
    console.log("-> turist evidence")
    return mongo.evidences.find({}).toArray()
  }

  /**@function getOne**/
  getOne(req, res) {
    console.log("-> get one evidence")
    const _id = ObjectId(req.params.id)
    return mongo.evidences.findOne({_id})
  }
}

module.exports = new EvidenceService()

async function getTrackId(payload) {
  return await {_id: 32424}
}
