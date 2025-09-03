import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsuarioModule } from './usuario/usuario.module';
import { PermisoModule } from './permiso/permiso.module';
import { ErrorInternoFilter } from './error-interno/error-interno.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ErrorInternoFilter());

  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('Descripcion de la API')
    .setVersion('1.0')
    .addTag('Ejemplos')
    .build();
    const document = SwaggerModule.createDocument(app, config, {
    include: [ UsuarioModule, PermisoModule ]
    });
    SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
