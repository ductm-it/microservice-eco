import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   ApiGatewayModule,
  //   {
  //     transport: Transport.TCP,
  //     options: {
  //       port: 3001,
  //     },
  //   },
  // );
  // await app.listen();
  const app = await NestFactory.create(ApiGatewayModule);
  await app.listen(3000);
  console.log('API Gateway is running on http://localhost:3000');
}
bootstrap();
