const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before tests run
// before is a mocha hook that tells mocha to do this
// before anything else
before(function(done){
  // Connect to MongoDB
  mongoose.connect('mongodb://localhost/testaroo');
  mongoose.connection.once('open', function(){
    console.log('myConnection has been made...');
    done();
  }).on('error', function(error){
    console.log('myConnection error: ', error);
  });
});

// Drop the characters collection before each test
// beforeEach is another mocha hook that tells mocha
// to do this before each test
beforeEach(function(done){
  // Drop the collection
  mongoose.connection.collections.mariochars.drop(function(){
      done();
  });
});
