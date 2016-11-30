var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/EventsBook';
var express = require('express');
var app     = express();

app.use('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/:tag', function(req, res){

  
    
  
   var findCoords = function(db, callback) {
    var cursor;
    var query = new RegExp(req.params.tag);
       db.collection('events').find( { name: query }).toArray(	function(err, results){
   res.json (results);
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findCoords(db, function() {
      db.close();
  });
});
  
 
  
})
app.listen('8081')
console.log('Magic happens on port 8081');
//

