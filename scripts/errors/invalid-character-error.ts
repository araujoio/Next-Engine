
export class InvalidCharactersError extends Error {
  constructor() {
    super('Argument <route> cannot contain invalid characters: \\ : * ? " < > |');
  }
}