'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class Is extends AsyncObject {

  constructor(value, clazz) {
    super(value, clazz);
  }

  definedSyncCall() {
    return (value, clazz) => {
      return value instanceof clazz;
    }
  }

}

module.exports = Is;
