'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

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
