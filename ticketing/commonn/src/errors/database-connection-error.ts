import { CustomError } from '../errors/custom-error';
export class DatabaseConnectionError extends CustomError {
  reason = 'Error connecting to database!';
  constructor() {
    super('Error connecting to database!');
    //Because we are extending a build in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  statusCode = 500;
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
