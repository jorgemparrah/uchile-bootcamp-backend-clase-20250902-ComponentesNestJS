import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AutorizacionGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    console.log("GUARD");

    // OBTENER OBJETO REQUEST
    const http = context.switchToHttp();
    const request = http.getRequest<any>();
    console.log(request.body)

    // VALIDACION DE PERMISOS
    if (request.body.nombre == "JORGE") {
      console.log("USUARIO SIN PERMISOS");
      return false;
    }
    return true;
  }
}
