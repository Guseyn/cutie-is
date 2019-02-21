'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class IsUndefined extends AsyncObject {
  constructor (value) {
    super(value)
  }

  syncCall () {
    return (value) => {
      return typeof value === 'undefined'
    }
  }
}

module.exports = IsUndefined
