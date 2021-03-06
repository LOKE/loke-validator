module.exports = exports = Validator;

var errors = require('./errors');

var validate = require('validate.js');
validate.validators.string = require('./custom/string');
validate.validators.array = require('./custom/array');

/**
 * Creates a new validator
 * @param {Object} opts - {throwError:Boolean, ErrorType:Type}
 */
function Validator(opts) {
  opts = opts || {};

  // If true the validator will throw an error when validation fails
  if (opts.throwError) {
    this._throwError = true;
  }

  this._ValidatorError = opts.ErrorType || errors.ValidatorError;
  this._specs = {};
}

Validator.prototype.register = function(typeId, modelSpec) {
  this._specs[typeId] = modelSpec;
};

Validator.prototype.validate = function(model, typeId) {
  var spec = this._specs[typeId];
  if (!spec) throw new Error('No validator available for type: ' + typeId);
  var validationFailed = validate(model, spec);

  if (validationFailed && this._throwError) {
    this._throwValidationError(validationFailed);
  }

  return validationFailed;
};

Validator.prototype._throwValidationError = function(details) {
  // we just grab the first error for the message
  var message;
  for (var prop in details) {
    if (Array.isArray(details[prop])) {
      message = details[prop][0];
      break;
    }
  }
  var error = new this._ValidatorError(message);
  error.details = details;
  throw error;
};
