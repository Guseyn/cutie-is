'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class IsRealObject extends AsyncObject {
  constructor (value) {
    super(value)
  }

  syncCall () {
    return (value) => {
      return typeof value === 'object' && value !== null
    }
  }
}

module.exports = IsRealObject
