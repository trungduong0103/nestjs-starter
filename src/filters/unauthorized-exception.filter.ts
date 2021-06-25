import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response, Request } from 'express';
import { CustomUnauthorizedException } from '../exceptions';

@Catch(CustomUnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: CustomUnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      error: exception.message,
      statusCode: status,
      timestamp: new Date().toLocaleString(),
      path: request.url,
    });
  }
}
