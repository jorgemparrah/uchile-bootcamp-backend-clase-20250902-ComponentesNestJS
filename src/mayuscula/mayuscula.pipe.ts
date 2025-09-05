import { ArgumentMetadata, BadRequestException, Injectable, ParseIntPipe, PipeTransform } from '@nestjs/common';

@Injectable()
export class MayusculaPipe<String> implements PipeTransform {

  transform(value: string, metadata: ArgumentMetadata) {
    
    /* PIPE DENTRO DE OTRO
    const transformador = new ParseIntPipe();
    const nuevo = transformador.transform(value, metadata);
    */

    /*
    for(let i = 0; i < 10; i++) {
      const apareceNumero = value.split('').find(c => c === `${i}`)
      if (apareceNumero) {
        throw new BadRequestException("Solo se permiten caracteres alfabeticos")
      }
    }
    */

    const existe = "0123456789".split('').some(numero => value.split('').some(c => c == numero));
    if (existe) {
      throw new BadRequestException("Solo se permiten caracteres alfabeticos")
    }

    return value.toUpperCase();
  }

}
