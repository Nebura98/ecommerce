import { NestFactory } from '@nestjs/core';
import { MoocModule } from './mooc.module';

async function bootstrap() {
  const app = await NestFactory.create(MoocModule);
  await app.listen(3000);
}
bootstrap();
