module.exports = exports = function(value, options, key, attributes) {

  if (options.notEmpty && (value === '' || value === undefined)) {
    return 'is empty';
  }

  if (typeof value === 'string') return;
  if (value === undefined) return;

  return "is not a string";
};
