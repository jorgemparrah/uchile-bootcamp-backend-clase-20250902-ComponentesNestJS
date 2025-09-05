import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, DefaultValuePipe, Query, ParseArrayPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { PermisoService } from './permiso.service';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
import { ApiQuery } from '@nestjs/swagger';
import { MayusculaPipe } from 'src/mayuscula/mayuscula.pipe';
import { LimitePipe } from 'src/limite/limite.pipe';

@Controller('permiso')
export class PermisoController {

  constructor(private readonly permisoService: PermisoService) {}

  @UsePipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    // forbidNonWhitelisted: true
  }))
  @Post()
  create(@Body() createPermisoDto: CreatePermisoDto) {
    console.log(createPermisoDto);
    return this.permisoService.create(createPermisoDto);
  }

  @Get()
  findAll() {
    return this.permisoService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
  // findOne(@Param('id') id: string) {
    console.log("id", id);
    return this.permisoService.findOne(+id);
  }

  @ApiQuery({ name: "tallas", type: String, required: false })
  @Get('filtros')
  filtrar(
    @Query('tipo', new DefaultValuePipe("50"), ParseIntPipe, ) tipo: number,
    @Query('tallas', new ParseArrayPipe({ items: String, separator: "." })) tallas: string[]
  ) {
  // findOne(@Param('id') id: string) {
    console.log("tipo", tipo);
    console.log("tallas", tallas);
    return "FILTRO DE DATOS";
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermisoDto: UpdatePermisoDto) {
    return this.permisoService.update(+id, updatePermisoDto);
  }

  @Delete(':id')
  remove(@Param('id', MayusculaPipe, LimitePipe) id: string) {
    console.log("id", id);
    return this.permisoService.remove(+id);
  }
}
