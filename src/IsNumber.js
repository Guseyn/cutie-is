'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class IsNumber extends AsyncObject {

  constructor(value) {
    super(value);
  }

  definedSyncCall() {
    return (value) => {
      return typeof value === 'number';
    }
  }

}

module.exports = IsNumber;
