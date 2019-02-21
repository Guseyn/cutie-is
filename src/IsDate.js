'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class IsDate extends AsyncObject {
  constructor (value) {
    super(value)
  }

  syncCall () {
    return (value) => {
      return value instanceof Date
    }
  }
}

module.exports = IsDate
