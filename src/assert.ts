class AssertionError extends Error {
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

function assert(value: unknown, message?: string): asserts value {
  if (value === undefined) {
    throw new AssertionError(message || "`value` is undefined");
  }

  if (value == null) {
    throw new AssertionError(message || "`value` is null");
  }
}

export default assert;
