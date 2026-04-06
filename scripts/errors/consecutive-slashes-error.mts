
export class ConsecutiveSlashesError extends Error {
  constructor() {
    super('Argument <route> cannot contain consecutive "/"');
  }
}