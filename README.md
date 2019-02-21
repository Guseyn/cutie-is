# cutie-is

[![NPM Version](https://img.shields.io/npm/v/@cuties/is.svg)](https://npmjs.org/package/@cuties/is)
[![Build Status](https://travis-ci.org/Guseyn/cutie-is.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-is)
[![codecov](https://codecov.io/gh/Guseyn/cutie-is/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-is)

[Cutie](https://github.com/Guseyn/cutie) extension for checking types in JavaScript. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-is/tree/master/test).

## Install

`npm install @cuties/is`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
const {
  // Here needed async objects from the table below
} = require('@cuties/is');
```

| Async Object  | Async/sync call | Parameters | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `Is` | `value instanceof clazz` | `value, clazz` | `boolean` |
| `IsArray` | `Array.isArray` | `value` | `boolean` |
| `IsBoolean` | `typeof value === 'boolean'` | `value` | `boolean` |
| `IsDate` | `value instanceof Date` | `value` | `boolean` |
| `IsFunction` | `typeof value === 'function'` | `value` | `boolean` |
| `IsNull` | `typeof value === null` | `value` | `boolean` |
| `IsNumber` | `typeof value === 'number'` | `value` | `boolean` |
| `IsObject` | `typeof value === 'object'` | `value` | `boolean` |
| `IsRealObject` | `typeof value === 'object' && value !== null` | `value` | `boolean` |
| `IsString` | `typeof value === 'string'` | `value` | `boolean` |
| `IsSymbol` | `typeof value === 'symbol'` | `value` | `boolean` |
| `IsUndefined` | `typeof value === 'undefined'` | `value` | `boolean` |
