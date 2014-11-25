// Generated by CoffeeScript 1.8.0
(function() {
  var ColorValue, FunctionValue, Value, assert, _;

  ColorValue = require("./values/ColorValue");

  FunctionValue = require("./values/FunctionValue");

  _ = require("./utilities");

  assert = require("assert");

  Value = require('./values/Value');

  module.exports = {
    valueMacros: {
      source: function(source, context) {
        if (source["tile-size"]) {
          source.tileSize = source["tile-size"];
          delete source["tile-size"];
        }
        return [context.getGlobalScope().addSource(source)];
      },
      identity: function(args) {
        return _.values(args);
      },
      hsv: function(args) {
        return [ColorValue.hsla(args['0'], args['1'], args['2'], 1)];
      },
      hsva: function(args) {
        return [ColorValue.hsla(args['0'], args['1'], args['2'], args['3'])];
      },
      hsl: function(args) {
        return [ColorValue.hsla(args['0'], args['1'], args['2'], 1)];
      },
      hsla: function(args) {
        return [ColorValue.hsla(args['0'], args['1'], args['2'], args['3'])];
      },
      rgb: function(args) {
        return [ColorValue.rgba(args['0'], args['1'], args['2'], 1)];
      },
      rgba: function(args) {
        return [ColorValue.rgba(args['0'], args['1'], args['2'], args['3'])];
      },
      'function': function(args) {
        var key, stop, stops, value;
        stops = [];
        for (key in args) {
          value = args[key];
          if (key === "base") {
            continue;
          }
          if ((stop = parseInt(key)) !== NaN) {
            stops.push([key, value]);
          } else {
            assert(false);
          }
        }
        assert(stops.length > 0);
        return [new FunctionValue(args.base, stops)];
      }
    }
  };

}).call(this);

//# sourceMappingURL=globals.js.map
