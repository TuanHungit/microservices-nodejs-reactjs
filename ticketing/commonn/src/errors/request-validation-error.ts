import { ValidationError } from 'express-validator';
import { CustomError } from '../errors/custom-error';
export class RequestValidationError extends CustomError {
  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');
    //Because we are extending a build in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  statusCode = 400;
  serializeErrors() {
    const formattedErrors = this.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
    return formattedErrors;
  }
}
