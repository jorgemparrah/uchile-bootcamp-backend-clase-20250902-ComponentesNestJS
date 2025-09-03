import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards, UseInterceptors, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AutorizacionGuard } from 'src/autorizacion/autorizacion.guard';
import { DemoInterceptor } from 'src/demo/demo.interceptor';

@UseGuards(AutorizacionGuard)
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @UseInterceptors(DemoInterceptor)
  create(@Req() req : any, @Body() createUsuarioDto: CreateUsuarioDto) {
    console.log("CONTROLADOR - CREAR USUARIO");
    console.log(createUsuarioDto);

    console.log("req.id", req["id"]);
    console.log("req.validacion", req.validacion);

    if (createUsuarioDto.nombre == "JORGE2") {
      throw new InternalServerErrorException("ERROR DESDE EL CONTROLADOR");
      // throw new BadRequestException("ERROR DESDE EL CONTROLADOR");
    }

    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
