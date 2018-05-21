'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class IsRealObject extends AsyncObject {

  constructor(value) {
    super(value);
  }

  definedSyncCall() {
    return (value) => {
      return typeof value === 'object' && value !== null;
    }
  }

}

module.exports = IsRealObject;
