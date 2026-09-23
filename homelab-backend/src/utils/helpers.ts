import type { NextFunction, Request, RequestHandler, Response } from "express";

export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>,
): RequestHandler {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}

export function notFound(res: Response, resource: string): void {
  res.status(404).json({ error: "NotFound", message: `${resource} no encontrado`, statusCode: 404 });
}
