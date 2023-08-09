import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const key = admin.initializeApp({
    credential: admin.credential.cert('./firebase-key.json'),
  });
  admin.messaging(key);
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
