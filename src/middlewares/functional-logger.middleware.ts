import { NextFunction, Request, Response } from 'express';

export function FunctionalLogger(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  console.log(
    `[Functional Middleware] Making a request to ${req.originalUrl}...`,
  );
  next();
}
