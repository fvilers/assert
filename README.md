# @fvilers/assert

A TypeScript type guard to asserts that the given value is not undefined nor null

## Installation

```
npm install @fvilers/assert
```

or

```
yarn add @fvilers/assert
```

# ECMAScript module

Starting with version 2.0.0, this library will be published as an ECMAScript module.

## Usage

```ts
import { assert } from "@fvilers/assert";

const foo = null;

assert(foo);
```

Will throw an error

```
Uncaught Error: `value` is null
```
