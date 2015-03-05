var Validator = require('./validator');
var errors = require('./errors');

exports.createValidator = function(opts) {
  return new Validator(opts);
};

exports.Validator = Validator;
exports.ValidatorError = errors.ValidatorError;
