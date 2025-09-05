import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  usuarios: Usuario[];

  constructor(){
    this.usuarios = [];

    const usuario1 = new Usuario();
    usuario1.nombre = "JORGE";
    usuario1.activo = false;
    this.usuarios.push(usuario1);

    const usuario2 = new Usuario();
    usuario2.nombre = "ANDRES";
    usuario2.activo = true;
    this.usuarios.push(usuario2);

    const usuario3 = new Usuario();
    usuario3.nombre = "ELENA";
    usuario3.activo = true;
    this.usuarios.push(usuario3);

  }

  create(createUsuarioDto: CreateUsuarioDto) {
    console.log("SERVICE - CREAR USUARIO");
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }

  usuariosActivos() {
    return this.usuarios.filter(u => u.activo);
  }

}
