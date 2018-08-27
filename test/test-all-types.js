const {
  Assertion
} = require('@cuties/assert');
const {
  Is,
  IsArray,
  IsBoolean,
  IsDate,
  IsNull,
  IsNumber,
  IsObject,
  IsRealObject,
  IsString,
  IsSymbol,
  IsUndefined
} = require('./../index');

new Assertion(
  new IsArray([1, 2, 3])
).call();

new Assertion(
  new IsBoolean(false)
).call();

new Assertion(
  new IsNull(null)
).call();

new Assertion(
  new IsObject(null)
).call();

new Assertion(
  new IsObject({})
).call();

new Assertion(
  new IsRealObject({})
).call();

new Assertion(
  new IsString("123")
).call();

new Assertion(
  new IsUndefined()
).call();

new Is(
  new Date(), Date
).call();

new IsDate(
  new Date()
).call();

class Test {}

new Is(
  new Test(), Test
).call();
