module.exports = exports = function(value, options, key, attributes) {
  if (!Array.isArray(value)) return "is not an array";
  
  if (options.minLength && value.length < options.minLength) {
    return 'must contain at least ' + options.minLength + ' items';
  }
  
  if (options.maxLength && value.length > options.maxLength) {
    return 'must not contain more than ' + options.maxLength + ' items';
  }
};
