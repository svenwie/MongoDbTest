// const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('myUpdating records', function(){

var char;

  beforeEach(function(done){
      char = new MarioChar({
      name: 'Mario',
      weight: 50
    });
    char.save().then(function(){
      // assert(char.isNew === false);
      done();
    });
  });

  // Create tests
  it('myUpdate one record in the database', function(done){
    MarioChar.findOneAndUpdate({name:'Mario'},{name:'Mario'}).then(function(){
      MarioChar.findOne({_id:char._id}).then(function(result){
        assert(result.name==='Mario');
        done();
      });
    });
  });
  it('myIncrement the weight by 1', function(done){
    MarioChar.update({},{$inc:{weight:1}}).then(function(){
      MarioChar.findOne({name: 'Mario'}).then(function(record){
          assert(record.weight === 51);
          done();
      });
    });
  });
});
