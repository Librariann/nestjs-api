import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, //데이터타입 자동변환.. ex) get :id로 받는 id값은 무조껀 string인데 이때 number로 변환해서 받을수있다 코드절약됨
    }),
  );
  await app.listen(3000);
}
bootstrap();
