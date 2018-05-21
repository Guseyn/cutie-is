'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class IsBoolean extends AsyncObject {

  constructor(value) {
    super(value);
  }

  definedSyncCall() {
    return (value) => {
      return typeof value === 'boolean';
    }
  }

}

module.exports = IsBoolean;
