# cutie-is

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for checking types in JavaScript. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-is/tree/master/test).

# Usage

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
| `IsDate` | `typeof value instanceof Date` | `value` | `boolean` |
| `IsNull` | `typeof value === null` | `value` | `boolean` |
| `IsNumber` | `typeof value === 'number'` | `value` | `boolean` |
| `IsObject` | `typeof value === 'object'` | `value` | `boolean` |
| `IsRealObject` | `typeof value === 'object' && value !== null` | `value` | `boolean` |
| `IsString` | `typeof value === 'string'` | `value` | `boolean` |
| `IsSymbol` | `typeof value === 'symbol'` | `value` | `boolean` |
| `IsUndefined` | `typeof value === 'undefined'` | `value` | `boolean` |

[npm-image]: https://img.shields.io/npm/v/@cuties/is.svg
[npm-url]: https://npmjs.org/package/@cuties/is

