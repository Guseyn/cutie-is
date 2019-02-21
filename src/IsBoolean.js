'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class IsBoolean extends AsyncObject {
  constructor (value) {
    super(value)
  }

  syncCall () {
    return (value) => {
      return typeof value === 'boolean'
    }
  }
}

module.exports = IsBoolean
