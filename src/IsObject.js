'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class IsObject extends AsyncObject {

  constructor(value) {
    super(value);
  }

  definedSyncCall() {
    return (value) => {
      return typeof value === 'object';
    }
  }

}

module.exports = IsObject;
