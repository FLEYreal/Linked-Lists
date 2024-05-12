// ./src/errors.ts : Error types for linked array

/** Error that's thrown when no element in defined */
export class NoNodeError extends Error {
  public message: string;

  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.message = message || "Please, provide an element to work with to fix this error.";

    Error.captureStackTrace(this);
  }
}
