'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class IsNull extends AsyncObject {

  constructor(value) {
    super(value);
  }

  definedSyncCall() {
    return (value) => {
      return value === null;
    }
  }

}

module.exports = IsNull;
