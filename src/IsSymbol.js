'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class IsSymbol extends AsyncObject {
  constructor (value) {
    super(value)
  }

  syncCall () {
    return (value) => {
      return typeof value === 'symbol'
    }
  }
}

module.exports = IsSymbol
