'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

class IsArray extends AsyncObject {

  constructor(value) {
    super(value);
  }

  definedSyncCall() {
    return (value) => {
      return Array.isArray(value);
    }
  }

}

module.exports = IsArray;
