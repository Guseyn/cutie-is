'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

class IsString extends AsyncObject {

  constructor(value) {
    super(value);
  }

  definedSyncCall() {
    return (value) => {
      return typeof value === 'string';
    }
  }

}

module.exports = IsString;
