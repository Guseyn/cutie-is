'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class IsNumber extends AsyncObject {
  constructor (value) {
    super(value)
  }

  syncCall () {
    return (value) => {
      return typeof value === 'number'
    }
  }
}

module.exports = IsNumber
