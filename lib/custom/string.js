module.exports = exports = function(value, options, key, attributes) {

  if (typeof value !== 'string') return "is not a string";

  if (options.notEmpty && value === '') {
    return 'is empty';
  }

};
