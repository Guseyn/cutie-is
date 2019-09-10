'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

class IsAsyncObject extends AsyncObject {
  constructor (value) {
    super(() => {
      return value
    })
  }

  syncCall () {
    return (value) => {
      return value() instanceof AsyncObject
    }
  }
}

module.exports = IsAsyncObject
