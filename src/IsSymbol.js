'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

class IsSymbol extends AsyncObject {

  constructor(value) {
    super(value);
  }

  definedSyncCall() {
    return (value) => {
      return typeof value === 'symbol';
    }
  }

}

module.exports = IsSymbol;
