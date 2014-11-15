// Generated by CoffeeScript 1.8.0
(function() {
  var Expression, MacroArgValues, Scope, ValueMacroReferenceExpression, literal, util, _,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Expression = require("./Expression");

  literal = require("./LiteralExpression").literal;

  util = require('util');

  _ = require("../utilities");

  Scope = require("../scopes/Scope");

  MacroArgValues = require('../macros/MacroArgValues');

  module.exports = ValueMacroReferenceExpression = (function(_super) {
    __extends(ValueMacroReferenceExpression, _super);

    function ValueMacroReferenceExpression(name, argumentExpressions) {
      this.name = name;
      this.argumentExpressions = argumentExpressions;
    }

    ValueMacroReferenceExpression.prototype.toValues = function(scope, options) {
      var argValues, macro;
      argValues = MacroArgValues.createFromExpressions(this.argumentExpressions, scope, options);
      if (macro = scope.getValueMacro(this.name, argValues, options)) {
        return macro.toValues(argValues, options);
      } else {
        throw new Error("Could not find value macro '" + this.name + "'");
      }
    };

    return ValueMacroReferenceExpression;

  })(Expression);

}).call(this);
