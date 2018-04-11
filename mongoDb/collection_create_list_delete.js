var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://127.0.0.1:27017", function(err, db) {
  var newDB = db.db("newDB");
  console.log(newDB.collectionNames());
  // newDB.collectionNames(function(err, collectionNames) {
  //   console.log("Initial collections: ");
  //   console.log(collectionNames);
  //   newDB.createCollection("newCollection", function(err, collection) {
  //     newDB.collectionNames(function(err, collectionNames) {
  //       console.log("Collections after creation: ");
  //       console.log(collectionNames);
  //       newDb.dropCollection("newCollection", function(err, results) {
  //         console.log("Collections after deletion: ");
  //         console.log(collectionNames);
  //         db.close()
  //       });
  //     });
  //   });
  // });
});
