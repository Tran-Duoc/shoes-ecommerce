import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const PORT = process.env.PORT || 8888;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`);
  });
}
bootstrap();
