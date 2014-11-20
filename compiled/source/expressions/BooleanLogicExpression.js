/// <reference path="../../definitions/index.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AttributeReferenceValue = require("../values/AttributeReferenceValue");
var _ = require("../utilities");
var Expression = require("./Expression");
var BooleanLogicExpression = (function (_super) {
    __extends(BooleanLogicExpression, _super);
    function BooleanLogicExpression(operator, expressions) {
        _super.call(this);
        this.operator = operator;
        this.expressions = expressions;
    }
    BooleanLogicExpression.prototype.toMGLFilter = function (scope, options) {
        options.pushFilter();
        var filter = [BooleanLogicExpression.operators[this.operator]].concat(_.map(this.expressions, function (expression) {
            return expression.toMGLFilter(scope, options);
        }));
        options.popFilter();
        return filter;
    };
    BooleanLogicExpression.operators = {
        "||": "any",
        "&&": "all"
    };
    return BooleanLogicExpression;
})(Expression);
module.exports = BooleanLogicExpression;
//# sourceMappingURL=BooleanLogicExpression.js.map