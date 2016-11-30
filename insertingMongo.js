var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

 var fs = require('fs');
var mydocuments = fs.readFile('events.JSON', 'utf8', function (err, data) {
var collection = db.collection('events');
 collection.insert(JSON.parse(data), function(err, docs) { // Should succeed
    collection.count(function(err, count) {
        console.log(format("count = %s", count));
        console.log("[" + data + "]" );
        db.close();
    });
});
        });
    });