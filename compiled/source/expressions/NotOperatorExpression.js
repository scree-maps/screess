var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Expression = require("./Expression");
var _ = require("../utilities");
var SetOperatorExpression = (function (_super) {
    __extends(SetOperatorExpression, _super);
    function SetOperatorExpression(expression) {
        _super.call(this);
        this.expression = expression;
    }
    SetOperatorExpression.prototype.toMGLFilter = function (scope, options) {
        return ["none", this.expression.toMGLFilter(scope, options)];
    };
    return SetOperatorExpression;
})(Expression);
module.exports = SetOperatorExpression;
//# sourceMappingURL=NotOperatorExpression.js.map