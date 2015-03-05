require('should');

var spec = {
  name: {presence:true}
};

describe('When throwError is false', function() {

  var validator;

  before(function() {
    validator = require('../lib').createValidator();
    validator.register('person', spec);
  });

  it('should continue if success', function() {
    validator.validate({name:'Dennis'}, 'person');
  });

  it('should return failed details on fail', function(done) {
    try {
      var results = validator.validate({firstName:'Dennis'}, 'person');
      Array.isArray(results.name).should.be.true;
      done();
    } catch(err) {
      done(err);
    }
  });

});


describe('When throwError is true', function() {

  var validator;

  before(function() {
    validator = require('../lib').createValidator({throwError:true});
    validator.register('person', spec);
  });

  it('should continue if success', function() {
    validator.validate({name:'Dennis'}, 'person');
  });

  it('should throw validator error on fail', function(done) {
    try {
      validator.validate({firstName:'Dennis'}, 'person');
      done(new Error('Should have failed'));
    } catch(err) {
      err.name.should.equal('ValidatorError');
      done();
    }
  });

  it('should return validation failure reasons on fail', function(done) {
    try {
      validator.validate({firstName:'Dennis'}, 'person');
      done(new Error('Should have failed'));
    } catch(err) {
      Array.isArray(err.details.name).should.be.true;
      done();
    }
  });

});
