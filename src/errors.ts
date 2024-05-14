// ./src/errors.ts : Error types for linked array

/** Error that's thrown when no node is defined */
export class NoNodeError extends Error {
  public message: string;

  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.message = message || "Please, provide a node to work with to fix this error.";

    Error.captureStackTrace(this);
  }
}


/** Error that's thrown when linked array is empty but it mustn't be */
export class EmptyArrayError extends Error {
  public message: string;

  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.message = message || "Linked array is empty so you cannot do anything that requires it to be filled. (For example: remove something from it)";

    Error.captureStackTrace(this);
  }
}
