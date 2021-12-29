import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('API RESTFUL')
  .setDescription('The API Library Documentation')
  .setVersion('0.0.1')
  .setContact('Maryucha','https://www.maryucha.dev','mym@certi.org.br | clh@certi.org.br')
  .setExternalDoc('Tutorial','https://www.sidechannel.blog/criando-uma-api-com-nestjs/index.html')
  .addTag('Library')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('swagger', app, document);
app.enableCors();

  await app.listen(3000);
}
bootstrap();
