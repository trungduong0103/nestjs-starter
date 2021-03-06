import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response, Request } from 'express';
import { CustomBadRequestException } from '../exceptions';

@Catch(CustomBadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: CustomBadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    response.status(status).json({
      message: exceptionResponse['message'],
      error: exceptionResponse['error'],
      statusCode: status,
      timestamp: new Date().toLocaleString(),
      path: request.url,
      requestBody: JSON.stringify(request.body),
    });
  }
}
