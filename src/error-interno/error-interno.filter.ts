import { ArgumentsHost, Catch, ExceptionFilter, InternalServerErrorException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';

@Catch(InternalServerErrorException)
export class ErrorInternoFilter<InternalServerErrorException> implements ExceptionFilter {

  constructor(private readonly usuarioService: UsuarioService) {}

  catch(exception: InternalServerErrorException, host: ArgumentsHost) {
    console.log("FILTRO DE EXCEPCIONES");
    const [req, res, next] = host.getArgs();

    console.log("VERDADERO ERROR");
    console.log(exception["response"]);

    res.send(400, {
        codigo: 400,
        mensaje: "Mensaje generico: Error en el servidor o en los datos",
        bodyEnviado: req.body,
        usuarios: this.usuarioService.usuariosActivos()
    });

  }

}
