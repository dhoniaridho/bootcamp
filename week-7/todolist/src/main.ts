import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  Logger.log(`Server has started with url ${await app.getUrl()}`);
}
bootstrap();
