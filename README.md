@radham/utils
=============

A small bespoke utility library.

Install
-------

...

Usage
-----

### attempt

Executes a function and returns its result, or `undefined` if it throws.

```typescript
import { attempt } from '@radham/utils';

attempt(() => JSON.parse('{"a":1}')); // { a: 1 }
attempt(() => JSON.parse('invalid')); // undefined
```

### capitalize

Capitalizes the first character of a string.

```typescript
import { capitalize } from '@radham/utils';

capitalize('hello'); // 'Hello'
```

### compose

Composes multiple functions into a single function that applies them from left to right.

```typescript
import { compose } from '@radham/utils';

const addOne = (value: number) => value + 1;
const double = (value: number) => value * 2;

compose(addOne, double)(3); // 8
```

### isNumber

Checks whether the given value is a number.

```typescript
import { isNumber } from '@radham/utils';

isNumber(42);                         // true
isNumber('42');                       // false
isNumber(NaN);                        // true
isNumber(NaN, { finite: true });      // false
isNumber(Infinity, { finite: true }); // false
```

### isPlainObject

Checks whether the given value is a plain object.

```typescript
import { isPlainObject } from '@radham/utils';

isPlainObject({ a: 1 });  // true
isPlainObject([1, 2, 3]); // false
isPlainObject(null);      // false
```

### isString

Checks whether the given value is a string.

```typescript
import { isString } from '@radham/utils';

isString('hello'); // true
isString(42);      // false
```

### omit

Creates a new object with the specified keys omitted.

```typescript
import { omit } from '@radham/utils';

omit({ a: 1, b: 2, c: 3 }, ['a', 'c']); // { b: 2 }
omit({ a: 1, b: 2 }, 'a');              // { b: 2 }
```

### range

Creates an array of numbers from `start` (inclusive) to `end` (exclusive).

```typescript
import { range } from '@radham/utils';

range(4);    // [0, 1, 2, 3]
range(2, 5); // [2, 3, 4]
```

### toString

Converts a value to its string representation.

```typescript
import { toString } from '@radham/utils';

toString(42);        // '42'
toString(null);      // 'null'
toString(undefined); // 'undefined'
```

### unique

Returns a new array with duplicate values removed.

```typescript
import { unique } from '@radham/utils';

unique([1, 2, 2, 3, 1]); // [1, 2, 3]
```

License
-------

The BSD 3-Clause License. See the [license file](LICENSE) for details.
