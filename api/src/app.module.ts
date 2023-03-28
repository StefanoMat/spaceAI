import { Module } from '@nestjs/common';
import { AdsModule } from './modules/ads/ads.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AdsModule],
})
export class AppModule {}
