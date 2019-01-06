// import { MongoClient} from 'mongodb';
//
// const mongoUrl = 'mongodb://backend:win123@ds123224.mlab.com:23224/dojazd';
//
// class MongoDatabaseService {
//   constructor() {
//     MongoClient.connect(mongoUrl)
//       .then(db => {
//         const dbo = db.db('dojazd');
//         this.users = dbo.collection('users');
//         this.routes = dbo.collection('routes');
//         this.pairs = dbo.collection('pairs');
//         console.log('Mongo connected');
//       })
//       .catch(err => console.log(err));
//   }
// }
// const test = new MongoDatabaseService()
// export default test
