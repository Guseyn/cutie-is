'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class Is extends AsyncObject {
  constructor (value, clazz) {
    super(value, clazz)
  }

  syncCall () {
    return (value, clazz) => {
      return value instanceof clazz
    }
  }
}

module.exports = Is
