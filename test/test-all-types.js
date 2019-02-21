const Assertion = require('./../assert/Assertion')
const {
  Is,
  IsArray,
  IsBoolean,
  IsDate,
  IsFunction,
  IsNull,
  IsNumber,
  IsObject,
  IsRealObject,
  IsString,
  IsSymbol,
  IsUndefined
} = require('./../index')

new Assertion(
  new IsArray([1, 2, 3])
).call()

new Assertion(
  new IsBoolean(false)
).call()

new Assertion(
  new IsNull(null)
).call()

new Assertion(
  new IsNumber(123)
).call()

new Assertion(
  new IsSymbol(
    Symbol('s')
  )
).call()

new Assertion(
  new IsObject(null)
).call()

new Assertion(
  new IsObject({})
).call()

new Assertion(
  new IsRealObject({})
).call()

new Assertion(
  new IsString('123')
).call()

new Assertion(
  new IsUndefined()
).call()

new Assertion(
  new Is(
    new Date(), Date
  )
).call()

new Assertion(
  new IsDate(
    new Date()
  )
).call()

new Assertion(
  new IsFunction(() => {})
).call()

class Test {}

new Assertion(
  new Is(
    new Test(), Test
  )
).call()
