class Stack {

  getGlobalScope() { return this.scope[0] }
  getScope() { return this.scope[this.scope.length - 1] }

  // TODO drop Stack suffix
  public valueMacro;
  public propertyMacro;
  public scope;

  constructor() {
    this.valueMacro = []
    this.propertyMacro = []
    this.scope = []
  }

}

export = Stack