'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class IsDate extends AsyncObject {

  constructor(value) {
    super(value);
  }

  definedSyncCall() {
    return (value) => {
      return value instanceof Date;
    }
  }

}

module.exports = IsDate;
