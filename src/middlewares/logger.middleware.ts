import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, NextFunction, Response } from 'express';

@Injectable()
export class Logger implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    console.log(`[Class Middleware] Making a request to ${req.originalUrl}...`);
    next();
  }
}
