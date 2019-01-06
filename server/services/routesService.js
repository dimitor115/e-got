// import {MongoClient} from 'mongodb'
const MongoClient = require('mongodb')

class RoutesService {
  async getSuggestedRoutes(){
    return [
      {
        startPoint: "Kamieńczyk",
        endPoint: "Szklarska",
        title: "Super hiper trasa",
        description: "Jest to jedna z najpiękniejszych tras w oklicach szklarskiej poręby! Każdy moze liczyć na nie zapomniane widoki"
      },
      {
        startPoint: "Zakopane",
        endPoint: "Giewont",
        title: "Jeszcze fajniejsza trasa",
        description: "Legendę o śpiących rycerzach zna chyba każdy z nas! Może warto więc wybrać się na ta malowniczą wycieczkę"
      },
      {
        startPoint: "Karpacz",
        endPoint: "Śnieżka",
        title: "Trasa która jest supi",
        description: "Śnieżka to niewątpliwie królowa Karkonoszy. Teraz czas abyś i Ty zdobył królową i wspiąl się na jej same wyżny ;)"
      }
    ]
  }

  async test(){
    const mongoUrl = 'mongodb://backend:win123@ds123224.mlab.com:23224/dojazd';
    return MongoClient.connect(mongoUrl, (err, db)=> {
      if(err) console.log(err)
      else {
        console.log('Mongo Coneccted!')
        db.close()
      }
    })
  }
}
export default new RoutesService()
