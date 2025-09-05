import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { EjemploMiddleware } from './ejemplo/ejemplo.middleware';
import { PermisoModule } from './permiso/permiso.module';

@Module({
  imports: [UsuarioModule, PermisoModule],
  controllers: [],
  providers: [],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EjemploMiddleware) // MIDDLEWARE A APLICAR
      .forRoutes('usuario');
  }


}
