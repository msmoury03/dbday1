
const MongoClient  = require('mongodb').MongoClient;

const dbUrl = 'mongodb://localhost:27017';

MongoClient.connect(dbUrl,(err,db)=>{
    if(err) console.log(err)
    var dbse = db.db("construction")
    dbse.createCollection("rawData", (err, suc)=>{
        if(err) console.log(err);
        console.log("collection created");
        
    })
})


