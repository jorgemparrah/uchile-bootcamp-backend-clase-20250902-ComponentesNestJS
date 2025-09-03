import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class EjemploMiddleware implements NestMiddleware {

  use(req: any, res: any, next: () => void) {
    // LOGS
    console.log("MIDDLEWARE")
    console.log(req.body)

    // TRANSFORMAR DATOS
    req.body.nombre = `${req.body.nombre}`.toUpperCase();

    // AGREGAR ATRIBUTOS NUEVOS AL REQUEST
    req.id = 1;
    req.validacion = true;

    // VALIDACION DE UN DATO
    if (!req.body.apellido) {
      res.send(400, {
        error: "El apellido es obligatorio"
      });
    } else {
      next();
    }

  }

}
