'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class IsString extends AsyncObject {
  constructor (value) {
    super(value)
  }

  syncCall () {
    return (value) => {
      return typeof value === 'string'
    }
  }
}

module.exports = IsString
