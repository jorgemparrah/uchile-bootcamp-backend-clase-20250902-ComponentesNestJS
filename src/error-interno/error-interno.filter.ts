import { ArgumentsHost, Catch, ExceptionFilter, InternalServerErrorException } from '@nestjs/common';

@Catch(InternalServerErrorException)
export class ErrorInternoFilter<InternalServerErrorException> implements ExceptionFilter {

  catch(exception: InternalServerErrorException, host: ArgumentsHost) {
    console.log("FILTRO DE EXCEPCIONES");
    const [req, res, next] = host.getArgs();

    console.log("VERDADERO ERROR");
    console.log(exception["response"]);

    res.send(400, {
        codigo: 400,
        mensaje: "Mensaje generico: Error en el servidor o en los datos",
        bodyEnviado: req.body
    });

  }

}
