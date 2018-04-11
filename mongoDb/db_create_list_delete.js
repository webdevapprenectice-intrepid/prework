var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017', function(err, db) {
  var newDB = db.db("newDB");
  newDB.createCollection("New Database and Collection Created")
  if(!err) {
    console.log("New Database and Collection Created");
    adminDB.listDatabases(function(err, databases) {
      console.log("After Add Database List: ");
      console.log(databases);
      db.db("newDB").dropDatabase(function(err, results) {
        if (!err) {
          console.log("Database dropped.");
          setTimeout(function() {
            adminDB.listDatabases(function(err, results) {
              var found = false;
              for(var i = 0; i < results.databases.length; i++) {
                if(results.databases[i].name == "newDB") found = true;
              }
              if (!found) {
                console.log("After Delete Database List: ");
                console.log(results);
              }
              db.close();
            });
          }, 15000);
        }
      });
    });
  }
});
