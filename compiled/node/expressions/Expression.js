// Generated by CoffeeScript 1.8.0
(function() {
  var Expression, Value;

  Value = require('../values/Value');

  module.exports = Expression = (function() {
    function Expression() {}

    Expression.prototype.toValue = function(scope, options) {
      var values;
      values = this.toValues(scope, options);
      if (values.length > 1) {
        throw new Error("Expected 1 value but found " + values.length + " values");
      }
      return values[0];
    };

    Expression.prototype.toValues = function(scope, options) {
      throw new Error("Abstract method");
    };

    Expression.prototype.toMGLValue = function(scope, options) {
      return Value.toMGLValue(this.toValue(scope, options), options);
    };

    return Expression;

  })();

}).call(this);
