'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

class IsUndefined extends AsyncObject {

  constructor(value) {
    super(value);
  }

  definedSyncCall() {
    return (value) => {
      return typeof value === 'undefined';
    }
  }

}

module.exports = IsUndefined;
