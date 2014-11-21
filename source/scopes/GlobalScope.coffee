Scope = require("./Scope")
_ = require("../utilities")
LayerScope = require('./LayerScope')
Globals = require('../globals')
ValueMacro = require('../macros/ValueMacro')
RuleMacro = require('../macros/RuleMacro')
{parse} = require '../parser'

module.exports = class GlobalScope extends Scope

  constructor: ->
    super()
    @layerScopes = {}
    @sources = {}

  addSource: (name, source) ->
    @sources[name] = source

  getValueMacro: (name, argValues) ->
    super || @getGlobalValueMacro(name, argValues)

  getGlobalValueMacro: (name, argValues) ->
    fn = Globals.valueMacros[name]
    if argsString = Globals.valueMacros[name]
      args = parse(argsString, startRule: "valueMacroDefinitionArguments")
    else
      args = null

    macro = ValueMacro.createFromFunction(name, args, @, fn)

    if macro.matches(name, argValues) then macro else null

  getRuleMacro: (name, argValues) ->
    super || @getGlobalRuleMacro(name, argValues)

  getGlobalRuleMacro: (name, argValues) ->
    fn = Globals.ruleMacros[name]
    if argsString = Globals.ruleMacros[name]
      args = parse(argsString, startRule: "")
    else
      args = null

    macro = RuleMacro.createFromFunction(name, args, @, fn)

    if macro.matches(name, argValues) then macro else null

  getGlobalScope: -> @

  addLayerScope: (name, scope) ->
    if @layerScopes[name] then throw new Error("Duplicate entries for layer scope '#{name}'")
    @layerScopes[name] = new LayerScope(name, @)

  toMGLGlobalScope: (options) ->
    options = _.extend(scope: "global", globalScope: @, options)

    layers = _.map @layerScopes, (layer) -> layer.toMGLLayerScope(options)
    rules = @toMGLRules(options, @rules)

    sources = _.objectMapValues @sources, (name, source) ->
      _.objectMapValues(source, (key, value) -> value.toMGLValue(options))

    transition =
      duration: rules["transition-delay"]
      delay: rules["transition-duration"]

    delete rules["transition-delay"]
    delete rules["transition-duration"]

    _.extend(rules, {
      version: 6
      layers: layers
      sources: sources
      transition: transition
    })
