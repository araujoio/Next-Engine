
export class RouteRequiredError extends Error {
  constructor() {
    super('Missing required argument: <route>');
  }
}