'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class IsObject extends AsyncObject {
  constructor (value) {
    super(value)
  }

  syncCall () {
    return (value) => {
      return typeof value === 'object'
    }
  }
}

module.exports = IsObject
