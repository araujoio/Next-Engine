
export class InvalidFormatError extends Error {
  constructor() {
    super('Argument <route> can only contain letters, numbers, "-", "_", "/", "[]", and "()"');
  }
}