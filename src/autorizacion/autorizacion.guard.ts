import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AutorizacionGuard implements CanActivate {

  constructor(private readonly usuarioService: UsuarioService){}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    console.log("GUARD");

    // OBTENER OBJETO REQUEST
    const http = context.switchToHttp();
    const request = http.getRequest<any>();
    console.log(request.body)

    // VALIDACION DE PERMISOS
    const usuariosActivos = this.usuarioService.usuariosActivos();
    const nombreUsuario = request.body.nombre;

    
    const usuarioEncontrado = usuariosActivos.find(u => u.nombre == nombreUsuario);
    if (usuarioEncontrado) {
      return true;
    }

    const loEncontro = usuariosActivos.some(u => u.nombre == nombreUsuario);
    if (loEncontro) {
      return true;
    }

    console.log("USUARIO SIN PERMISOS");
    return false;

  }
}
