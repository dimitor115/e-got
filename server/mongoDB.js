module.exports = async function () {
  let mongo = require('mongodb')
  const mongoUrl = 'mongodb://dev:szpunar123@ds149914.mlab.com:49914/e-got';
  const client = (await mongo.MongoClient.connect(mongoUrl)).db("e-got")
  return {
    routes: client.collection('routes')
  }
}


