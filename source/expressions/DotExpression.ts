import Expression = require("./Expression");
import Scope = require("../Scope");
import Stack = require("../Stack");
import assert = require('assert')

// TODO merge this class with SubscriptExpression
class DotExpression extends Expression {

  constructor(public baseExpression:Expression, public property:string) {
    super()
    assert(this.baseExpression instanceof Expression)
  }

  toValues(scope:Scope, stack:Stack):any[] {
    var base = this.baseExpression.toValues(scope, stack)[0];
    assert(base[this.property] !== undefined);
    return [base[this.property]];
  }

}

export = DotExpression;
