
export class InvalidBoundaryError extends Error {
  constructor() {
    super('Argument <route> cannot start or end with "/"');
  }
}