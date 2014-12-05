import Expression = require("./Expression");
import LiteralExpression = require("./LiteralExpression");
import Scope = require("../Scope");
import Stack = require("../Stack");

import _ = require("../utilities");

interface Entry {
  name:string;
  expression:Expression;
}

class MapExpression extends Expression {

  constructor(public entries:Entry[]) {
    super();
  }

  evaluateToIntermediates(scope:Scope, stack:Stack):any[] {
    var value = _.objectMap(this.entries, (entry) => {
      return [entry.name, entry.expression.evaluateToIntermediate(scope, stack)]
    });

    return [value];
  }

}

export = MapExpression;
