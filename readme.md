# LOKE Validator

Model validation container built on top of validate.js.

It is contained within it's own NPM module primarily so that:
- Custom validators can be added and shared across projects
- The pattern can be easily reused in multiple modules within a project

## Usage
```js
var validator = require('loke-validator').createValidator();

var spec = {
    name: {presence: true}  
};

validator.register('person', spec);

var person1 = {
    name: 'Dennis'
};

var person2 = {};

// make sure person1 is a person
validator.validate(person1, 'person');

// make sure person2 is a person
validator.validate(person2, 'person');
```
