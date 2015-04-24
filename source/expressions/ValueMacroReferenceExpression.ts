import Expression = require("./Expression");
import ExpressionSet = require("../ExpressionSet");
import util = require('util');
import Scope = require("../Scope");
import ValueSet = require('../ValueSet');
import Stack = require("../Stack");
import _ = require("../utilities");
import assert = require("assert");

class ValueMacroReferenceExpression extends Expression {

  constructor(public name:string, public expressions:ExpressionSet) {
    super();
  }

  evaluateToIntermediate(scope:Scope, stack:Stack):any {
    assert(scope instanceof Scope);
    var values = this.expressions.toValueSet(scope, stack);

    var macro = scope.getValueMacro(this.name, values, stack);
    if (!macro) {
      throw new Error("Could not find value macro " + this.name);
    }

    return macro.evaluateToIntermediate(values, stack);
  }
}

export = ValueMacroReferenceExpression;
