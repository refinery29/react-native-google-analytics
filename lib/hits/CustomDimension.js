var Hit = require('../Hit');

class CustomDimension extends Hit {
  constructor(dimension_index, value, experiment) {
    var obj = {};
    obj['cd' + dimension_index] = value;

    super('customdimension', obj, experiment);
  }
}

module.exports = CustomDimension;

