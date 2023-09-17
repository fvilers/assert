import { expect, test } from "vitest";
import assert from "../src/assert.js";

test("asserts `undefined`", () => {
  expect(() => assert(undefined)).toThrowError();
});

test("asserts `null`", () => {
  expect(() => assert(null)).toThrowError();
});

test("asserts `undefined` and uses the specified error message", () => {
  const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  expect(() => assert(undefined, message)).toThrowError(message);
});

test("asserts `undefined` and uses the specified error message", () => {
  const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  expect(() => assert(null, message)).toThrowError(message);
});
