// const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('myDeleting records', function(){

var char;

  beforeEach(function(done){
      char = new MarioChar({
      name: 'Mario'
    });
    char.save().then(function(){
      // assert(char.isNew === false);
      done();
    });
  });

  // Create tests
  it('myDeletes one record from the database', function(done){
    MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
      MarioChar.findOne({name:'Mario'}).then(function(result){
        assert(result===null);
        done();
      });
    });

  });


});
