'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class IsFunction extends AsyncObject {
  constructor (value) {
    super(value)
  }

  syncCall () {
    return (value) => {
      return typeof value === 'function'
    }
  }
}

module.exports = IsFunction
